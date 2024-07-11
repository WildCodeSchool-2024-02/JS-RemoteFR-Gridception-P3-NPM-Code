import axios from "axios";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function StreetArt() {
  const { id } = useParams();
  const [streetArt, setStreetArt] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/street_arts/${id}`)
      .then((res) => {
        setStreetArt(res.data);
      });
  }, [id]);

  return (
    <section className="street-art-component">
      <article className="street-art-details">
        <div className="title-pic">
          <h1>{streetArt.title}</h1>
          <img src={streetArt.file} alt="" />
        </div>
        <div className="separator">'</div>
        <div className="street-art-desc">
          <h2> Artiste </h2>
          <p className="para-street-art">
            {!streetArt.artist ? "Artiste Inconnu" : streetArt.artist}
          </p>
          <h3>Description</h3>
          <p className="para-street-art">{streetArt.description}</p>
          <p>localisation</p>
        </div>
      </article>
    </section>
  );
}

export default StreetArt;
