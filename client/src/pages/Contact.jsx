import { useState } from "react";
import axios from "axios";
import logo from "../assets/images/logo.png";

function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMailChange = (e) => {
    setMail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <section className="form-container">
      <img src={logo} alt="Street Art Hunter logo" className="logoMobile" />
      <h1>Vous vouliez nous dire un truc ?</h1>
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            required=""
            name="name"
            id="name"
            type="text"
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"> Mail</label>
          <input
            required=""
            name="email"
            id="email"
            type="text"
            onChange={handleMailChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="textarea">Votre Message</label>
          <textarea
            required=""
            cols="50"
            rows="10"
            id="textarea"
            name="textarea"
            onChange={handleMessageChange}
          >
            {" "}
          </textarea>
        </div>
        <button
          type="submit"
          className="form-submit-btn"
          onClick={() => {
            axios
              .post("http://localhost:3310/api/contacts", {
                fullname: name,
                mail,
                message,
              })
              .then((res) => {
                console.info(res);
              })
              .catch((err) => {
                console.info(err);
              });
          }}
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default Contact;
