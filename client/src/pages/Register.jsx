import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import logo from "../assets/images/logo.png";
import Tetris from "../assets/images/Tetris.gif";

function Register() {
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegisterChange = (event) => {
    const { name, value } = event.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const notifySuccess = () =>
    toast.success("Inscription réussie !", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyError = () =>
    toast.error(
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

  return (
    <section className="form-container">
      <img src={logo} alt="Street Art Hunter logo" className="logoMobile" />
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
      <form className="form">
        <div className="form-left">
          <div className="form-group">
            <label htmlFor="firstName">Prénom</label>
            <input
              required
              name="firstName"
              id="firstName"
              type="text"
              minLength={3}
              maxLength={50}
              onChange={handleRegisterChange}
              value={registerForm.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Nom</label>
            <input
              required
              name="lastName"
              id="lastName"
              type="text"
              minLength={3}
              maxLength={70}
              onChange={handleRegisterChange}
              value={registerForm.lastName}
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
            onClick={(e) => {
              e.preventDefault();
              if (
                registerForm.title !== "" &&
                registerForm.description !== "" &&
                registerForm.longitude !== "" &&
                registerForm.latitude !== ""
              ) {
                axios
                  .post(
                    `${import.meta.env.VITE_API_URL}/api/street_arts`,
                    registerForm
                  )
                  .then((res) => {
                    notifySuccess();
                    setRegisterForm({
                      users_id: "9",
                      title: "",
                      description: "",
                      artist: "",
                      latitude: "",
                      longitude: "",
                      is_valid: 1,
                    });
                    console.info(res);
                  })
                  .catch((err) => {
                    console.info(err);
                  });
              } else if (
                registerForm.file === "" ||
                registerForm.title === "" ||
                registerForm.description === "" ||
                registerForm.longitude === "" ||
                registerForm.latitude === ""
              ) {
                notifyError();
              }
            }}
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
