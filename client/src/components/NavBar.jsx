import * as React from "react";
import { NavLink } from "react-router-dom";

import { StyledEngineProvider } from "@mui/material/styles";

import Drawer from "./Drawer";

import AddIcon2 from "../assets/images/add_icon2.png";
import Home from "../assets/images/home.png";
import Logo from "../assets/images/logo.png";
import TrophyIcon from "../assets/images/trophy_icon.png";
import UserIcon from "../assets/images/user_icon.png";

// eslint-disable-next-line react/prop-types
function NavBar({ isLoggedIn }) {
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

            <li>
              <NavLink to="/profil">
                <img src={UserIcon} alt="page profil" className="nav-icon" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/add">
                <img
                  src={AddIcon2}
                  alt="ajouter un street art"
                  className="add-art"
                />
              </NavLink>
            </li>
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
              <React.StrictMode>
                <StyledEngineProvider injectFirst>
                  <Drawer />
                </StyledEngineProvider>
              </React.StrictMode>
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
        <nav className="navbar-top">
          <li className="navbar-content">
            <NavLink to="/About">À propos</NavLink>
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
          {isLoggedIn === false ? (
            <li className="navbar-content">
              <NavLink to="/profil">Profil</NavLink>
            </li>
          ) : (
            <h1>TG</h1>
          )}
        </nav>
      </section>
    </>
  );
}

export default NavBar;
