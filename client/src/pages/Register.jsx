import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "../assets/images/logo.png";
import Tetris from "../assets/images/Tetris.gif";

function Register() {
  const navigate = useNavigate();

  const [registerForm, setRegisterForm] = useState({
    pseudo: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    roles_id: "2",
  });

  const handleRegisterChange = (event) => {
    const { name, value } = event.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const notifySuccess = () => {
    toast.success("Inscription réussie ! Vous allez être rediriger vers la page d'accueil", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setTimeout(() => {
      navigate("/");
    }, 4000);
  };

  const notifyError = (message) =>
    toast.error(
      message ||
        "Il nous manque une information, vérifiez que vous avez rempli tous les champs",
      {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      registerForm.pseudo !== "" &&
      registerForm.firstname !== "" &&
      registerForm.lastname !== "" &&
      registerForm.email !== "" &&
      registerForm.password !== "" &&
      registerForm.confirmPassword !== ""
    ) {
      if (registerForm.password === registerForm.confirmPassword) {
        axios
          .post(`${import.meta.env.VITE_API_URL}/api/users`, registerForm)
          .then((res) => {
            notifySuccess();
            setRegisterForm({
              pseudo: "",
              firstname: "",
              lastname: "",
              email: "",
              password: "",
              confirmPassword: "",
              roles_id: 2,
            });
            console.info(res);
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        notifyError("Les mots de passe ne correspondent pas !");
      }
    } else {
      notifyError(
        "Il nous manque une information, vérifiez que vous avez rempli tous les champs"
      );
    }
  };

  return (
    <section className="form-container">
      <img
        src={logo}
        alt="Street Art Hunter logo"
        className="logo-mobile-register"
      />
      <div className="wrap">
        <span className="letter">I</span>
        <span className="letter">N</span>
        <span className="letter">S</span>
        <span className="letter">C</span>
        <span className="letter">R</span>
        <span className="letter">I</span>
        <span className="letter">P</span>
        <span className="letter">T</span>
        <span className="letter">I</span>
        <span className="letter">O</span>
        <span className="letter">N</span>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-left">
          <div className="form-group">
            <label htmlFor="pseudo">Pseudo</label>
            <input
              required
              name="pseudo"
              id="pseudo"
              type="text"
              minLength={3}
              maxLength={50}
              onChange={handleRegisterChange}
              value={registerForm.pseudo}
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstname">Prénom</label>
            <input
              required
              name="firstname"
              id="firstname"
              type="text"
              minLength={3}
              maxLength={50}
              onChange={handleRegisterChange}
              value={registerForm.firstname}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Nom</label>
            <input
              required
              name="lastname"
              id="lastname"
              type="text"
              minLength={3}
              maxLength={70}
              onChange={handleRegisterChange}
              value={registerForm.lastname}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Adresse E-Mail</label>
            <input
              required
              name="email"
              id="email"
              type="email"
              onChange={handleRegisterChange}
              value={registerForm.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              required
              name="password"
              id="password"
              type="password"
              onChange={handleRegisterChange}
              value={registerForm.password}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
            <input
              required
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              onChange={handleRegisterChange}
              value={registerForm.confirmPassword}
            />
          </div>
          <button
            type="submit"
            className="form-submit-btn"
          >
            S'enregistrer
          </button>
        </div>

        <div className="central-bar" />

        <div className="form-right">
          <img src={Tetris} alt="Preview" />
        </div>
      </form>
      <ToastContainer />
    </section>
  );
}

export default Register;
