import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  const [loggedUser, setLoggedUser] = useState({});
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (loggedUser) {
      navigate("/add");
    } else {
      setShowLoginPopup(true);
    }
  };

  const handleLogout = () => {
    setLoggedUser();
    localStorage.removeItem("token");
    navigate("/");
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <>
      <NavBar loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <Outlet
        context={{
          loggedUser,
          setLoggedUser,
          showLoginPopup,
          setShowLoginPopup,
          handleNavigate,
          handleLogout,
          closeLoginPopup,
        }}
      />
      <Footer />
    </>
  );
}

export default App;
