import { useEffect } from 'react';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './casemap.css';
import type { CaseStudy, Lang } from '../../contract/types';
import { pickText } from '../../lib/text';

// This file is the only place that imports Leaflet. CaseMap.tsx loads it with React.lazy, so the map code
// is a separate chunk that is fetched when a topic first shows a map.

export type MappableCase = CaseStudy & { lat: number; lng: number };

// A plain round pin made in CSS (casemap.css): no image files to resolve in the build.
const PIN = L.divIcon({ className: 'foma-pin', html: '<span></span>', iconSize: [24, 24], iconAnchor: [12, 12], popupAnchor: [0, -12] });

const SINGLE_ZOOM: Record<CaseStudy['scale'], number> = { local: 10, national: 6, regional: 5, global: 3 };

function Fit({ cases }: { cases: MappableCase[] }) {
  const map = useMap();
  // The effect depends on a key built from the places, not on the array, so a re-render of the page
  // never moves a map the student has panned.
  const key = cases.map(item => `${item.lat},${item.lng},${item.scale}`).join(';');
  useEffect(() => {
    if (cases.length === 1) map.setView([cases[0].lat, cases[0].lng], SINGLE_ZOOM[cases[0].scale]);
    else map.fitBounds(L.latLngBounds(cases.map(item => [item.lat, item.lng] as [number, number])), { padding: [28, 28], maxZoom: 8 });
  }, [map, key]);
  return null;
}

export default function CaseMapView({ cases, lang, label }: { cases: MappableCase[]; lang: Lang; label: string }) {
  return (
    <div role="region" aria-label={label}>
      <MapContainer
        className="foma-map"
        center={[cases[0].lat, cases[0].lng]}
        zoom={SINGLE_ZOOM[cases[0].scale]}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Fit cases={cases} />
        {cases.map(item => (
          <Marker key={item.id} position={[item.lat, item.lng]} icon={PIN} title={pickText(item.title, lang)}>
            <Popup>
              <strong>{pickText(item.title, lang)}</strong>
              <br />
              {item.place}, {item.years}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
