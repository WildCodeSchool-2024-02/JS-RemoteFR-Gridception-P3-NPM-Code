import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import axios from "axios";

import Logo from "../assets/images/logo.png";

function LoginPopup() {
  const { setShowLoginPopup, setLoggedUser } = useOutletContext();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = loginForm;

    if (!email || !password) {
      setErrorMessage("Veuillez remplir tous les champs.");
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/login`,
        loginForm
      );
      if (response.data) {
        localStorage.setItem(`token`, response.data.token);

        setLoggedUser(response.data.user);

        setShowLoginPopup(false);
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage("Erreur lors de la connexion. Veuillez réessayer.");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setShowLoginPopup(false);
    }
  };

  return (
    <div className="popup-overlay">
      <div
        className="popup-background"
        onClick={() => setShowLoginPopup(false)}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label="Close popup"
      />
      <div className="loginform-container">
        <button
          className="close-button"
          type="button"
          onClick={() => setShowLoginPopup(false)}
        >
          ×
        </button>
        <img src={Logo} alt="Street art hunter" className="logoform-desktop" />
        <form onSubmit={handleLogin} className="loginform-group">
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
          {errorMessage && <p className="error-message">{errorMessage}</p>}
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
