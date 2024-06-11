import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <nav className="footer">
      <li>
        <NavLink to="Legalnotice">Notice</NavLink>
      </li>
      <li>Github</li>
      <li>Copyright NPM Code</li>
    </nav>
  );
}

export default Footer;
