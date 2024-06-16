import "./Map.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Circle, Popup, useMap } from "react-leaflet";

function LocationCircle({ location }) {
  const map = useMap();
  if (location !== undefined) {
    map.flyTo({ lng: location.lng, lat: location.lat }, map.getZoom());
  }

  return location === undefined ? null : (
    <Circle center={{ lng: location.lng, lat: location.lat }} radius={1000}>
      <Popup>You are here</Popup>
    </Circle>
  );
}

function Map({ location }) {
  return (
    <MapContainer center={[51.5, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationCircle location={location} />
    </MapContainer>
  );
}

export default Map;
