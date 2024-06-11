import * as React from "react";

import { NavLink } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import UserIcon from "../assets/images/user_icon.png";
import GalleryIcon from "../assets/images/gallery_icon.png";
import AddIcon from "../assets/images/add_icon.png";
import TrophyIcon from "../assets/images/trophy_icon.png";
import Logo from "../assets/images/logo.png";

import Drawer from "./Drawer";

function NavBar() {
  return (
    <>
      <section className="navbar-logo-container">
        <nav>
          <menu>
            <li>
              <NavLink href="/profil">
                <img src={UserIcon} alt="page profil" className="navIcon" />
              </NavLink>
            </li>
            <li>
              <NavLink href="/galerie">
                <img
                  src={GalleryIcon}
                  alt="Galerie street art"
                  className="navIcon"
                />
              </NavLink>
            </li>
            <li>
              <NavLink href="/add">
                <img
                  src={AddIcon}
                  alt="ajouter un street art"
                  className="addArt"
                />
              </NavLink>
            </li>
            <li>
              <NavLink href="/classement">
                <img
                  src={TrophyIcon}
                  alt="page classement"
                  className="navIcon"
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
        <img src={Logo} alt="Logo Street Art Hunter" className="logoDesktop" />
        <nav className="navbarTop">
          <li className="navbarContent">
            <NavLink to="/galerie">Oeuvres</NavLink>
          </li>
          <li className="navbarContent">
            <NavLink to="/">Artistes</NavLink>
          </li>
          <li className="navbarContent">
            <NavLink to="/classement">Classement</NavLink>
          </li>
        </nav>
      </section>
    </>
  );
}

export default NavBar;
