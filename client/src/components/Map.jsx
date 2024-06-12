/* eslint-disable array-callback-return */
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import oeuvres from "../js/oeuvres";

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const mapBoxToken = import.meta.env.VITE_MAPBOX_TOKEN;

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

    oeuvres.map((oeuvre) => {
      const popupContent = `
       <div class="popup-container">
          <h3>${oeuvre.name}</h3>
          <img src="${oeuvre.image}" alt="${oeuvre.name}" class="popupimg-container" />
          <button>Ajouter une photo</button>
          <button>en savoir plus</button>

        </div>`;

      new mapboxgl.Marker()
        .setLngLat([oeuvre.longitude, oeuvre.latitude])
        .setPopup(new mapboxgl.Popup().setHTML(popupContent))
        .addTo(map.current);
    });
  }, [mapBoxToken]);

  return <div ref={mapContainer} className="map-container" />;
}

export default Map;
