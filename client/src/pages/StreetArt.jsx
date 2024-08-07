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

  useEffect(() => {
    const imageContainer = document.querySelector(".image-container");

    const showOverlay = () => {
      imageContainer.classList.add("show-overlay");
      setTimeout(() => {
        imageContainer.classList.remove("show-overlay");
      }, 5000);
    };

    showOverlay();
  }, []);

  return (
    <section className="street-art-component">
      <article className="street-art-details">
        <div className="title-pic">
          <h1 className="title-mobile">{streetArt.title}</h1>
          <div className="image-container">
            <img src={streetArt.file} alt="" />
            <div className="overlay">
              <div className="text">
                <h1 className="title-desktop">{streetArt.title}</h1>
                <h2> Artiste </h2>
                <p className="para-street-art">
                  {!streetArt.artist ? "Artiste Inconnu" : streetArt.artist}
                </p>
                <h3>Description</h3>
                <p className="para-street-art">{streetArt.description}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default StreetArt;
