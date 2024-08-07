import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { StyledEngineProvider } from "@mui/material/styles";

import Drawer from "./Drawer";

import AddIcon2 from "../assets/images/add_icon2.png";
import Home from "../assets/images/home.png";
import Logo from "../assets/images/logo.png";
import TrophyIcon from "../assets/images/trophy_icon.png";
import UserIcon from "../assets/images/user_icon.png";
import Logout from "../assets/images/logout.png";

function NavBar({ loggedUser, handleNavigate, handleLogout }) {
  let userLink;
  if (loggedUser?.id !== undefined && loggedUser.roles_id === 2) {
    userLink = (
      <li>
        <NavLink to="/utilisateur/profil">
          <img src={UserIcon} alt="page profil" className="nav-icon" />
        </NavLink>
      </li>
    );
  } else if (loggedUser?.id !== undefined && loggedUser.roles_id === 1) {
    userLink = (
      <li>
        <NavLink to="/admin">
          <img src={UserIcon} alt="page admin" className="nav-icon" />
        </NavLink>
      </li>
    );
  } else {
    userLink = (
      <li>
        <NavLink onClick={handleNavigate}>
          <img
            src={UserIcon}
            alt="ajouter un street art"
            className="nav-icon"
          />
        </NavLink>
      </li>
    );
  }

  return (
    <>
      <section className="navbar-logo-container">
        <nav>
          <menu>
            <li>
              <NavLink to="/">
                <img src={Home} alt="Icône page accueil" className="nav-icon" />
              </NavLink>
            </li>
            {userLink}
            {loggedUser?.id !== undefined ? (
              <li>
                <NavLink to="/utilisateur/add">
                  <img
                    src={AddIcon2}
                    alt="ajouter un street art"
                    className="add-art"
                  />
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink onClick={handleNavigate}>
                  <img
                    src={AddIcon2}
                    alt="ajouter un street art"
                    className="add-art"
                  />
                </NavLink>
              </li>
            )}
            <li>
              <NavLink to="/classement">
                <img
                  src={TrophyIcon}
                  alt="page classement"
                  className="nav-icon"
                />
              </NavLink>
            </li>
            <li>
              <StyledEngineProvider injectFirst>
                <Drawer loggedUser={loggedUser} handleLogout={handleLogout} />
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
            className="logo-desktop"
          />
        </NavLink>

        <li className="navbar-content">
          <NavLink to="/a_propos">À propos</NavLink>
        </li>
        <li className="navbar-content">
          <NavLink to="/galerie">Galerie</NavLink>
        </li>
        <li className="navbar-content">
          <NavLink to="/classement">Classement</NavLink>
        </li>
        <li className="navbar-content">
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <nav className="navbar-top">
          {loggedUser?.roles_id === 1 ? (
            <li className="navbar-content">
              <NavLink to="/admin">Admin</NavLink>
              <button
                type="button"
                onClick={() => handleLogout()}
                className="button-to-deconnect-nav"
              >
                <img src={Logout} alt="logo pour se déconnecter" />
              </button>
            </li>
          ) : (
            ""
          )}

          {loggedUser?.id !== undefined && loggedUser.roles_id === 2 ? (
            <li className="navbar-content">
              <NavLink to="/utilisateur/profil">Mon Compte</NavLink>
              <button
                type="button"
                onClick={() => handleLogout()}
                className="button-to-deconnect-nav"
              >
                <img src={Logout} alt="logo pour se déconnecter" />
              </button>
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
  handleLogout: PropTypes.func.isRequired,
};
export default NavBar;
