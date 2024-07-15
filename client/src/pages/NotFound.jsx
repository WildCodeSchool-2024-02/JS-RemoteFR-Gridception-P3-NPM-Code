import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found-component">
      <div className="noise" />
      <div className="overlay" />
      <h1>
        Error <span className="errorcode">404</span>
      </h1>
      <p className="output">
        La page que vous recherchez a peut-être été supprimée, son nom a changé
        ou est temporairement indisponible.
      </p>
      <p className="output">
        S'il vous plaît, essayez de retourner en arrière ou{" "}
        <Link to="/">
          <button className="return-home-button-404" type="button">
            Retourner à l'accueil
          </button>
        </Link>
      </p>
      <p className="output">Bonne chance.</p>
    </section>
  );
}

export default NotFound;
