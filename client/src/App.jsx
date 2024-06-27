import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Remplacez par la logique réelle de vérification de la connexion
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (isLoggedIn) {
      navigate("/add");
    } else {
      setShowLoginPopup(true);
    }
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Outlet
        context={{
          isLoggedIn,
          setIsLoggedIn,
          showLoginPopup,
          setShowLoginPopup,
          handleNavigate,
          closeLoginPopup,
        }}
      />
      <Footer />
    </>
  );
}

export default App;
