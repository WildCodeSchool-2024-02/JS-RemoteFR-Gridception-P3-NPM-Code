import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";

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
      <NavBar />
    </>
  );
}

export default App;
