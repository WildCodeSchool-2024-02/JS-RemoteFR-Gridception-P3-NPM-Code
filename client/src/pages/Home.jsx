import { Link } from "react-router-dom";
import WorldMap from "../components/WorldMap";

import addStreetArt from "../assets/images/addStreetArt.png";

function Home() {
  return (
    <section className="mainDesktop">
      <div className="addStreetArt">
        <article className="homeTextContent">
          <h1 className="mainTitle">
            STREET ART <br /> HUNTER
          </h1>
          <h2 className="secondTitle">La chasse commence</h2>
        </article>
        <Link className="buttonAdd" to="/add">
          <img src={addStreetArt} alt="Icone pour ajouter une oeuvre" />
        </Link>
      </div>
      <WorldMap />
    </section>
  );
}

export default Home;
