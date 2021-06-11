import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup} from 'react-leaflet'
import mapMarkerImg from '../images/map-marker.png'
import 'leaflet/dist/leaflet.css'
import '../styles/pages/bloodCenterMap.css'
import mapIcon from '../utils/mapIcon'
import api from '../services/api'

interface BloodCenter {
    id: number
    name: string
    latitude: number
    longitude: number
}

function BloodCenterMap() {
    const [ bloodCenters, setBloodCenter ] = useState<BloodCenter[]>([])

    useEffect(() => {
        api.get('bloodcenter/lists').then(response => {
            setBloodCenter(response.data);

        });
    }, []);

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um Hemocêntro no mapa.</h2>
                    <p>Doar sangue salva vidas :)</p>
                </header>

                <footer>
                    <strong>Minas</strong>
                    <span>Alfenas</span>
                </footer>
            </aside>

        <Map
        className="markercluster-map"
        center={[-21.4245078,-45.949204]}
        zoom={15}
        style={{width:'100%', height:'100%'}}
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
                

                {bloodCenters.map(bloodCenter => {
                    return (
                        <Marker 
                            position={[ bloodCenter.latitude, bloodCenter.longitude ]}
                            icon={mapIcon}
                            key={bloodCenter.id}
                        >
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                {bloodCenter.name}
                                <Link to={`/bloodcenter/list/${bloodCenter.id}`}>
                                    <FiArrowRight size={32} color="#fff" />
                                </Link>
                            </Popup>
                        </Marker>
                    )
                })}
            </Map>

            

            <Link to="users/create" className="create-bloodcenter">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}

export default BloodCenterMap