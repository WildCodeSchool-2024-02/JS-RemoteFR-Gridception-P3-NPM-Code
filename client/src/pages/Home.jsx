import { Link } from "react-router-dom";

import Map from "../components/Map";

import addStreetArt from "../assets/images/addStreetArt.png";

function Home() {
  return (
    <section className="main-desktop">
      <div className="add-street-art">
        <article className="home-text-content">
          <h1 className="main-title">
            STREET ART <br /> HUNTER
          </h1>
          <h2 className="second-title">La chasse commence</h2>
        </article>
        <Link className="button-add" to="/add">
          <img src={addStreetArt} alt="Icone pour ajouter une oeuvre" />
        </Link>
      </div>
      <Map />
    </section>
  );
}

export default Home;
