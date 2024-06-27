import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

import Logo from "../assets/images/logo.png";

function LoginPopup() {
  const { setIsLoggedIn, setShowLoginPopup } = useOutletContext();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginPopup(false);
  };

  return (
    <div className="popup-overlay">
      <div className="loginform-container">
        <img src={Logo} alt="Street art hunter" className="logoform-desktop" />
        <form onSubmit={console.info(loginForm)} className="loginform-group">
          <label htmlFor="email">Adresse E-Mail</label>
          <input
            required
            name="email"
            id="email"
            type="email"
            onChange={handleLoginChange}
            value={loginForm.email}
          />
          <label htmlFor="password">Mot de passe</label>
          <input
            required
            name="password"
            id="password"
            type="password"
            onChange={handleLoginChange}
            value={loginForm.password}
          />
          <button
            className="loginform-submit-btn"
            type="submit"
            onClick={handleLogin}
          >
            Se connecter
          </button>
          <div className="loginform-register">
            <p>Pas de Compte ?</p>
            <Link
              to="/inscription"
              onClick={() => setShowLoginPopup(false)}
              className="loginform-register-btn"
            >
              S'enregistrer
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPopup;
