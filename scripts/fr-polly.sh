#!/usr/bin/env bash
# Generates the listening audio of French B (content/fr/listening/<id>.ts) with Amazon Polly, neural engine.
#
#   scripts/fr-polly.sh <track-id|all>      e.g. scripts/fr-polly.sh l1-racines, or scripts/fr-polly.sh all
#
# Per track: scripts/fr-ssml.mjs writes one SSML document per turn; aws polly synthesize-speech turns each one into an
# MP3 with the voice of that turn; ffmpeg joins the MP3s in turn order (-c copy) into public/audio/fr/<track-id>.mp3.
# AWS calls use the profile foma-portal only. The script stops at the first error and does not retry.
# Temporary files go to a new directory under ${FR_POLLY_TMPDIR:-$TMPDIR} and are removed on exit.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROFILE="foma-portal"
REGION="us-east-1"
TRACKS="$ROOT/content/fr/listening"
OUT="$ROOT/public/audio/fr"

if [[ $# -ne 1 ]]; then
  echo "usage: $0 <track-id|all>" >&2
  exit 2
fi

# A track id is the file name of content/fr/listening/<id>.ts (for example l1-racines). Anything else, such as a path,
# is refused here, before any temporary folder is made.
if [[ "$1" != "all" && ! "$1" =~ ^l[0-9]+-[a-z0-9-]+$ ]]; then
  echo "usage: $0 <track-id|all>, for example $0 l1-racines" >&2
  exit 2
fi

for tool in aws ffmpeg ffprobe node; do
  if ! command -v "$tool" >/dev/null 2>&1; then
    echo "missing tool: $tool" >&2
    exit 1
  fi
done

WORK="$(mktemp -d "${FR_POLLY_TMPDIR:-${TMPDIR:-/tmp}}/fr-polly.XXXXXX")"
trap 'rm -rf "$WORK"' EXIT

run_track() {
  local id="$1"
  local source="$TRACKS/$id.ts"
  if [[ ! -f "$source" ]]; then
    echo "no track file: content/fr/listening/$id.ts" >&2
    exit 1
  fi

  local dir="$WORK/$id"
  mkdir -p "$dir/mp3" "$OUT"
  echo "[$id] writing the SSML of each turn"
  node --experimental-strip-types "$ROOT/scripts/fr-ssml.mjs" "$source" "$dir/ssml" > "$dir/turns.tsv"

  : > "$dir/list.txt"
  local count=0 ssml voice part
  while IFS=$'\t' read -r ssml voice; do
    part="$(basename "$ssml" .ssml)"
    echo "[$id] turn $part, voice $voice"
    aws polly synthesize-speech \
      --profile "$PROFILE" --region "$REGION" \
      --engine neural --output-format mp3 \
      --voice-id "$voice" --text-type ssml \
      --text "file://$ssml" "$dir/mp3/$part.mp3" > /dev/null < /dev/null
    echo "file '$dir/mp3/$part.mp3'" >> "$dir/list.txt"
    count=$((count + 1))
  done < "$dir/turns.tsv"

  if [[ "$count" -eq 0 ]]; then
    echo "[$id] the track has no turns" >&2
    exit 1
  fi

  ffmpeg -hide_banner -loglevel error -y -f concat -safe 0 -i "$dir/list.txt" -c copy "$dir/joined.mp3"
  mv "$dir/joined.mp3" "$OUT/$id.mp3"

  local seconds bytes
  seconds="$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$OUT/$id.mp3")"
  bytes="$(wc -c < "$OUT/$id.mp3" | tr -d ' ')"
  echo "[$id] wrote public/audio/fr/$id.mp3: $count turns, ${seconds%.*} s, $bytes bytes"
}

if [[ "$1" == "all" ]]; then
  for file in "$TRACKS"/*.ts; do
    run_track "$(basename "$file" .ts)"
  done
else
  run_track "$1"
fi
