import logo from "../assets/images/logo.png";

function Contact() {
  return (
    <section className="form-container">
      <img src={logo} alt="Street Art Hunter logo" className="logoMobile" />
      <h1>Vous vouliez nous dire un truc ?</h1>
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input required="" name="name" id="name" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="email"> Mail</label>
          <input required="" name="email" id="email" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="textarea">Votre Message</label>
          <textarea
            required=""
            cols="50"
            rows="10"
            id="textarea"
            name="textarea"
          >
            {" "}
          </textarea>
        </div>
        <button type="submit" className="form-submit-btn">
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default Contact;
