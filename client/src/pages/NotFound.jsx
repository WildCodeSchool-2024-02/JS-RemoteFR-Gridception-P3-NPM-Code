import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="Not-found-component">
      <h1>Page en cours de construction</h1>
      <Link to="/"> Retour a l'accueil</Link>
    </section>
  );
}

export default NotFound;
