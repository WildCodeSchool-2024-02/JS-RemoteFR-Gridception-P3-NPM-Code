import { NavLink, useOutletContext } from "react-router-dom";

import Map from "../components/Map";
import LoginPopup from "../components/LoginPopup";

import addStreetArt from "../assets/images/addStreetArt.png";

function Home() {
  const { showLoginPopup, handleNavigate, closeLoginPopup } =
    useOutletContext();

  return (
    <section className="main-desktop">
      <div className="add-street-art">
        <article className="home-text-content">
          <h1 className="main-title">
            STREET ART <br /> HUNTER
          </h1>
          <h2 className="second-title">La chasse commence</h2>
        </article>
        <NavLink className="button-add" onClick={handleNavigate}>
          <img src={addStreetArt} alt="Icone pour ajouter une oeuvre" />
        </NavLink>
      </div>
      <Map />
      {showLoginPopup && <LoginPopup onClose={closeLoginPopup} />}
    </section>
  );
}

export default Home;
