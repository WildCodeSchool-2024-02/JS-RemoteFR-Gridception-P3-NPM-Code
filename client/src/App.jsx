import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Outlet />

      <NavBar />
      <Footer />
    </>
  );
}

export default App;
