import { Link } from "react-router-dom";
import Map from "../components/Map";

import Addpicture from "../assets/images/addpicture.png";

function Home() {
  return (
    <section className="main-desktop">
      <article className="text-content">
        <h1 className="main-title">
          STREET ART <br /> HUNTER
        </h1>
        <h2 className="second-title">La chasse commence ici</h2>
        <div className="buttons">
          <button type="button" className="button-connect">
            Se connecter
          </button>
          <Link className="button-add" to="/add">
            <img src={Addpicture} alt="Icone pour ajouter une oeuvre" />
          </Link>
        </div>
      </article>
      <Map />
    </section>
  );
}

export default Home;
