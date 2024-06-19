import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "../assets/images/logo.png";

function Contact() {
  const [contactForm, setContactForm] = useState({
    fullname: "",
    mail: "",
    message: "",
  });

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const notifySucces = () =>
    toast.success("Formulaire bien reçu ! Merci !", {
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
    toast.error(" Il nous manque une information, vérifie ton formulaire ", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <>
      <section className="form-container">
        <img src={logo} alt="Street Art Hunter logo" className="logoMobile" />
        <h1>Vous vouliez nous dire un truc ?</h1>
        <form className="form">
          <div className="form-group">
            <label htmlFor="fullname">Nom</label>
            <input
              required
              name="fullname"
              id="name"
              type="text"
              minLength={3}
              maxLength={155}
              onChange={(e) => handleChangeForm(e)}
              value={contactForm.fullname}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"> Mail</label>
            <input
              required
              name="mail"
              id="email"
              type="email"
              maxLength={155}
              onChange={(e) => handleChangeForm(e)}
              value={contactForm.mail}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Votre Message</label>
            <textarea
              required
              cols="50"
              rows="10"
              id="textarea"
              name="message"
              minLength={20}
              placeholder="20 caractères minimum"
              onChange={(e) => handleChangeForm(e)}
              value={contactForm.message}
            />
          </div>

          <button
            type="submit"
            className="form-submit-btn"
            onClick={(e) => {
              e.preventDefault();
              if (
                contactForm.fullname !== "" &&
                contactForm.mail !== "" &&
                contactForm.message !== ""
              ) {
                axios
                  .post("http://localhost:3310/api/contacts", contactForm)
                  .then((res) => {
                    notifySucces();
                    setContactForm({
                      fullname: "",
                      mail: "",
                      message: "",
                    });
                    console.info(res);
                  })
                  .catch((err) => {
                    console.info(err);
                  });
              } else if (
                contactForm.fullname === "" ||
                contactForm.mail === "" ||
                contactForm.message === ""
              ) {
                notifyError();
              }
            }}
          >
            Envoyer
          </button>
        </form>
      </section>
      <ToastContainer />
    </>
  );
}

export default Contact;
