import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <main className="container">
        <section className="text-box">
          <h1 className="block-primary">
            <span className="block-primary-main">Street Art Hunter</span>
          </h1>
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
