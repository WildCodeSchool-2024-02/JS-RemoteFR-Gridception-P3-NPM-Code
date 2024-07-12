import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { StyledEngineProvider } from "@mui/material/styles";
import UserIcon from "../assets/images/user_icon.png";
import TrophyIcon from "../assets/images/trophy_icon.png";
import Logo from "../assets/images/logo.png";
import AddIcon2 from "../assets/images/add_icon2.png";
import Home from "../assets/images/home.png";

import Drawer from "./Drawer";

function NavBar({ loggedUser, handleNavigate }) {
  return (
    <>
      <section className="navbar-logo-container">
        <nav>
          <menu>
            <li>
              <NavLink to="/">
                <img src={Home} alt="Icône page accueil" className="navIcon" />
              </NavLink>
            </li>

            <li>
              <NavLink to="/profil">
                <img src={UserIcon} alt="page profil" className="navIcon" />
              </NavLink>
            </li>

            <li>
              <NavLink to="/add">
                <img
                  src={AddIcon2}
                  alt="ajouter un street art"
                  className="addArt"
                />
              </NavLink>
            </li>

            <li>
              <NavLink to="/classement">
                <img
                  src={TrophyIcon}
                  alt="page classement"
                  className="navIcon"
                />
              </NavLink>
            </li>

            <li>
              <StyledEngineProvider injectFirst>
                <Drawer />
              </StyledEngineProvider>
            </li>
          </menu>
        </nav>
      </section>

      <section className="navbar-desktop">
        <NavLink to="/">
          <img
            src={Logo}
            alt="Logo Street Art Hunter"
            className="logoDesktop"
          />
        </NavLink>
        <nav className="navbar-top">
          <li className="navbar-content">
            <NavLink to="/a_propos">À propos</NavLink>
          </li>
          <li className="navbarContent">
            <NavLink to="/galerie">Galerie</NavLink>
          </li>
          <li className="navbarContent">
            <NavLink to="/classement">Classement</NavLink>
          </li>
          <li className="navbarContent">
            <NavLink to="/contact">Contact</NavLink>
          </li>

          {loggedUser?.id !== undefined && loggedUser.roles_id === 3 ? (
            <li className="navbar-content">admin</li>
          ) : (
            ""
          )}

          {loggedUser?.id !== undefined && loggedUser.roles_id !== 3 ? (
            <li className="navbar-content">
              <NavLink to="/profil">Mon Compte</NavLink>
            </li>
          ) : (
            ""
          )}

          {loggedUser?.id === undefined ? (
            <li className="navbar-content">
              <NavLink type="button" onClick={handleNavigate}>
                Se Connecter
              </NavLink>
            </li>
          ) : (
            ""
          )}
        </nav>
      </section>
    </>
  );
}

NavBar.propTypes = {
  loggedUser: PropTypes.shape({
    id: PropTypes.number,
    roles_id: PropTypes.number,
  }).isRequired,
  handleNavigate: PropTypes.func.isRequired,
};
export default NavBar;
