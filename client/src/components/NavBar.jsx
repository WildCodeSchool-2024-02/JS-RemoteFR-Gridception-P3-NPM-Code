import { NavLink } from "react-router-dom";

import UserIcon from "../assets/images/user_icon.png";
import GalleryIcon from "../assets/images/gallery_icon.png";
import AddIcon from "../assets/images/add_icon.png";
import TrophyIcon from "../assets/images/trophy_icon.png";
import DotIcon from "../assets/images/dot_icon.png";

function NavBar() {
  return (
    <>
      <section className="navbar-logo-container">
        <nav>
          <menu>
            <li>
              <NavLink href="/profil">
                <img src={UserIcon} alt="page profil" />
              </NavLink>
            </li>
            <li>
              <NavLink href="/galerie">
                <img src={GalleryIcon} alt="Galerie street art" />
              </NavLink>
            </li>
            <li>
              <NavLink href="/add">
                <img src={AddIcon} alt="ajouter un street art" />
              </NavLink>
            </li>
            <li>
              <NavLink href="/classement">
                <img src={TrophyIcon} alt="page classement" />
              </NavLink>
            </li>
            <li>
              <NavLink href="/">
                <img src={DotIcon} alt="plus d'option" />
              </NavLink>
            </li>
          </menu>
        </nav>
      </section>
      <section className="navbar-container">
        <nav>
          <li>
            <NavLink to="/galerie">Oeuvres</NavLink>
          </li>
          <li>
            <NavLink to="/">Artistes</NavLink>
          </li>
          <li>
            <NavLink to="/classement">Classement</NavLink>
          </li>
        </nav>
      </section>
    </>
  );
}

export default NavBar;
