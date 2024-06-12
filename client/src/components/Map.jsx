/* eslint-disable array-callback-return */
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const mapBoxToken = import.meta.env.VITE_MAPBOX_TOKEN;

  const [datas, setDatas] = useState([]);
  const [localisation, setLocalisation] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3310/api/pictures`)
      .then((results) => {
        setLocalisation(results.data);
        console.info(results);
      })
      .catch((err) => console.info(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3310/api/street_arts`)
      .then((results) => {
        setDatas(results.data);
        console.info(results);
      })
      .catch((err) => console.info(err));
  }, []);

  useEffect(() => {
    if (map.current) return;
    mapboxgl.accessToken = mapBoxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/anonymze/clx26p0rq004201qqe1jq2pxn",
      center: [4, 47],
      zoom: 5.2,
    });

    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );
  }, [mapBoxToken]);

  useEffect(() => {
    if (!map.current || datas.length === 0) return;

    datas.map((oeuvre) => {
      const popupContent = `
       <div class="popup-container">
          <h3>${oeuvre.title}</h3>
          <img src="${localisation.url}" alt="${localisation.name}" class="popupimg-container" />
          <button>Ajouter une photo</button>
          <button>en savoir plus</button>

        </div>`;

      new mapboxgl.Marker()
        .setLngLat([oeuvre.longitude, oeuvre.latitude])
        .setPopup(new mapboxgl.Popup().setHTML(popupContent))
        .addTo(map.current);
    });
  }, [datas, localisation]);

  return (
    <>
      <h1>{datas.name}</h1>
      <div ref={mapContainer} className="map-container" />;
    </>
  );
}

export default Map;
