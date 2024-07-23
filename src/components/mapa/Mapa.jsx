import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import '../../../node_modules/leaflet/dist/leaflet.css'
import './mapa.css'
import L from 'leaflet'
import icon from '../../../node_modules/leaflet/dist/images/marker-icon.png'
import iconShadow from '../../../node_modules/leaflet/dist/images/marker-shadow.png'


function Mapa() {

    const iconUbicacion = new L.icon({
        iconUrl: icon,
        iconShadow: iconShadow,
        iconSize: [35, 30],
        iconAnchor: [22,94],
        popupAnchor: [-3, -76]
    })

    return (
        <div>
            <MapContainer className='mapa' center={[-31.4286, -64.1848]} zoom={12} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-31.4286, -64.1848]} icon={iconUbicacion}>
                    <Popup>
                        Córdoba, Argentina
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
export default Mapa