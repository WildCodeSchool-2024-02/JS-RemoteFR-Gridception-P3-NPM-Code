import Map from "../components/Map";

function Home() {
  return (
    <section className="main-desktop">
      <article className="text-content">
        <h1 className="main-title">Street art Hunter</h1>
        <h2 className="second-title">La chasse commence ici</h2>
        <div className="buttons">
          <button type="button" className="button-connect">
            Connexion
          </button>
          <button type="button" className="button-add">
            +
          </button>
        </div>
      </article>
      <Map />
    </section>
  );
}

export default Home;
