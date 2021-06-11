import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { FiClock, FiInfo } from "react-icons/fi";
import {Map, Marker, TileLayer } from "react-leaflet";
import api from "../services/api";
import 'leaflet/dist/leaflet.css'


import '../styles/pages/bloodCenter.css';
import Sidebar from "../components/Sidebar";
import mapIcon from '../utils/mapIcon'

interface BloodCenter {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instruction: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: number;
    url: string;
  }>
}

interface BloodCenterParams {
  id: string;
}

export default function BloodCenter() {

  const params = useParams<BloodCenterParams>()
  const [ bloodCenter, setBloodCenter ] = useState<BloodCenter>()
  const [activeImageIndex, setActiveImageIndex] = useState(0)

   
  useEffect(() => {
    api.get(`bloodcenter/list/${params.id}`).then(response => {
      setBloodCenter(response.data);

    });
}, [params.id]);

if (!bloodCenter) {
  return <p>Carregando...</p>
}

  return (
    <div id="page-bloodCenter">
      
    <Sidebar />

      <main>
        <div className="bloodCenter-details">
          <img src={bloodCenter.images[activeImageIndex].url} alt={bloodCenter.name} />

          <div className="images">
            {
              bloodCenter.images.map((image, index) => {
                return (
                  <button 
                  key={image.id} 
                  className={activeImageIndex === index ? "active" : ""} 
                  type="button"
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}>
                    <img src={image.url} alt={bloodCenter.name} />
                  </button>
                );
              })
            }
          </div>
          
          <div className="bloodCenter-details-content">
            <h1>{bloodCenter.name}</h1>
            <p>{bloodCenter.about}</p>

            <div className="map-container">
              <Map
               className="markercluster-map"
                center={[bloodCenter.latitude, bloodCenter.longitude]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker interactive={false} icon={mapIcon} position={[bloodCenter.latitude, bloodCenter.longitude]} />
              </Map>

              <footer>
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${bloodCenter.latitude}, ${bloodCenter.longitude}`} target="_blank" rel="noopener noreferrer">Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

          
            <h2>Instruções para visita</h2>
            <p>{bloodCenter.instruction}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {bloodCenter.opening_hours}
              </div>
              {bloodCenter.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
              ) : (
                <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#FF669D" />
                  Não atendemos <br />
                  fim de semana
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

