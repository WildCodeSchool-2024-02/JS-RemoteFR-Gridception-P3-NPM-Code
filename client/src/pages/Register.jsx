import logo from "../assets/images/logo.png";

function Register() {
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
        <div className="form-group">
          <label htmlFor="firstName">Prénom</label>
          <input required name="firstName" id="firstName" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Nom</label>
          <input required name="lastName" id="lastName" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adresse E-Mail</label>
          <input required name="email" id="email" type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input required name="password" id="password" type="password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
          <input
            required
            name="confirmPassword"
            id="confirmPassword"
            type="password"
          />
        </div>
        <button type="submit" className="form-submit-btn">
          S'enregistrer
        </button>
      </form>
    </section>
  );
}

export default Register;
