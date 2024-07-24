import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    avatar: "https://image.noelshack.com/fichiers/2024/29/2/1721137848-avatardusite.png",
    points: "0",
    password: "",
    confirmPassword: "",
    roles_id: "2",
    cgu: false,
  });

  const handleRegisterChange = (event) => {
    const { name, value, type, checked } = event.target;
    setRegisterForm({
      ...registerForm,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const notifySuccess = () => {
    toast.success(
      "Inscription réussie ! Vous allez être redirigé vers la page d'accueil",
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
      registerForm.confirmPassword !== "" &&
      registerForm.cgu
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
              cgu: false,
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
              className="label-grey"
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
              className="label-grey"
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
              className="label-grey"
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
              className="label-grey"
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
              className="label-grey"
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
              className="label-grey"
              id="confirmPassword"
              type="password"
              onChange={handleRegisterChange}
              value={registerForm.confirmPassword}
            />
          </div>
          <div className="form-group form-group-checkbox">
            <label htmlFor="cgu">
              J'accepte les{" "}
              <Link to="/a_propos">conditions générales d'utilisation</Link>
            </label>
            <input
              required
              name="cgu"
              className="label-checkbox"
              id="cgu"
              type="checkbox"
              onChange={handleRegisterChange}
              checked={registerForm.cgu}
            />
          </div>
          <button type="submit" className="form-submit-register-btn">
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
