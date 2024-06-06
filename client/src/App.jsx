import { NavLink, Outlet } from "react-router-dom";

import "./App.css";
// import Map from "./components/Map";

function App() {

  return (
    <>
      <main className="container">
        <header>
          <h1 className="logo">NPM-Code</h1>
        </header>

        <section className="text-box">
          <h2 className="block-primary">
            <span className="block-primary-main">Street Art Hunter</span>
          </h2>
        </section>
      </main>
      <section>
        <Outlet />
      </section>
      <nav>
        <NavLink to="/">Profil</NavLink>
        <NavLink to="/">Galerie</NavLink>
        <NavLink to="/">+</NavLink>
        <NavLink to="/">Classement</NavLink>
        <NavLink to="/">Plus ...</NavLink>
      </nav>
    </>
  );
}

export default App;
