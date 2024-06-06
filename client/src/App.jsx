import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";

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
      <NavBar />
    </>
  );
}

export default App;
