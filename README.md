# Foma Learning Portal

A private revision portal for one IB student (Dubai): the school mock exams from 26 Oct to 5 Nov 2026, then the May 2027 finals. It has a study plan that follows the exam calendar, subject content (EN and RU), practice, flashcards, and a teacher report. Progress lives in the browser; there is no backend.

## Commands

- `npm ci` — install dependencies (Node 22.18 or later).
- `npm run dev` — local development server.
- `npm run check` — typecheck, content validation, unit tests, production build. Run it before every push to `main`.
- `npm run validate` — content rules only (see `PLAN.md` §2).
- `npm run coverage -- <subject>` — writes `ops/coverage/<subject>.md`.

## Layout

- `src/contract/` — content types. This is the contract for every subject stream; change it only through `ops/requests.md`.
- `content/<subject>/` — subject packs: `meta.ts`, `index.ts` (shared glob loader), syllabus, topics (EN and RU MDX), terms, formulas, questions, cases, paper guides.
- `content/_example/` — a complete example topic for authors. It is not shown in navigation.
- `src/sims/<subject>/` — interactive simulations, one file each.
- `src/planner/` — the deterministic study plan (`PLAN.md` §5).
- `data/` — exam calendar and per-subject quotas.
- `infra/` — AWS hosting (Terraform: S3, CloudFront with basic auth, Route 53).
- `.github/workflows/deploy.yml` — deploys `main` to S3 and invalidates CloudFront.

The site is marked `noindex` and sits behind a login. Do not add analytics or external scripts without a decision in `PLAN.md`.
