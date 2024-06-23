import axios from "axios";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";

import logo from "../assets/images/logo.png";

import "react-toastify/dist/ReactToastify.css";

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
      <section className="form-container-contact">
        <img src={logo} alt="Street Art Hunter logo" className="logo-mobile" />
        <h1 className="mainTitleContact">Vous vouliez nous dire un truc ?</h1>
        <form className="form-contact">
          <div className="form-group-contact">
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
          <div className="form-group-contact">
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

          <div className="form-group-contact">
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
                  .post(
                    `${import.meta.env.VITE_API_URL}/api/contacts`,
                    contactForm
                  )
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
