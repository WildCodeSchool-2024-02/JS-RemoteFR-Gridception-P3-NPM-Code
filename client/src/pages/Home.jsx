import { Link } from "react-router-dom";
import Map from "../components/Map";

import Addpicture from "../assets/images/addpicture.png";

function Home() {
  return (
    <section className="mainDesktop">
      <article className="textContent">
        <h1 className="mainTitle">
          STREET ART <br /> HUNTER
        </h1>
        <h2 className="secondTitle">La chasse commence ici</h2>
        <div className="buttons">
          <button type="button" className="buttonConnect">
            Se connecter
          </button>
          <Link className="buttonAdd" to="/add">
            <img src={Addpicture} alt="Icone pour ajouter une oeuvre" />
          </Link>
        </div>
      </article>
      <Map />
    </section>
  );
}

export default Home;
