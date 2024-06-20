import { useEffect, useRef, useState } from "react";
import axios from "axios";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Add from "../assets/images/add_icon2.png";
import info from "../assets/images/info2.png";

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const mapBoxToken = import.meta.env.VITE_MAPBOX_TOKEN;

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/street_arts/pictures`)
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

    datas.forEach((oeuvre) => {
      const popupContent = `
       <div class="popup-container">
          <h3 class="popuptitle">${oeuvre.title}</h3>
          <img class="imgpopup-container" src=${oeuvre.url} alt="oeuvres" />
<div class="button-container">
          <a href="/addpictures">
              <img src=${Add} alt="icone ajout"/>
            </a>
            <a href="/streeArt">
              <img src=${info} alt="icone pour plus de détails"/>
            </a>
</div>
        </div>`;

      new mapboxgl.Marker()
        .setLngLat([oeuvre.longitude, oeuvre.latitude])
        .setPopup(new mapboxgl.Popup().setHTML(popupContent))
        .addTo(map.current);
    });
  }, [datas]);

  return <div ref={mapContainer} className="map-container" />;
}

export default Map;
