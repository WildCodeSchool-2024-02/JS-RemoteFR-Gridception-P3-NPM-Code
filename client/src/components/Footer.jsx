import { NavLink } from "react-router-dom";

import GithubIcon from "../assets/images/github.png";

function Footer() {
  return (
    <nav className="footer">
      <li>
        <NavLink to="/mentions_legales">Conditions d'utilisation</NavLink>
      </li>
      <li>
        <NavLink to="/cgu">CGU</NavLink>
      </li>
      <li>
        <a
          href="https://github.com/WildCodeSchool-2024-02/JS-RemoteFR-Gridception-P3-NPM-Code"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GithubIcon} alt="Github icon" className="github-icon" />
        </a>
      </li>
      <li>
        <NavLink to="/cgu">Notre équipe</NavLink>
      </li>
      <li>© Copyright NPM Code</li>
    </nav>
  );
}

export default Footer;
