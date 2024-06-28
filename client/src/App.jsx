import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  const [loggedUser, setLoggedUser] = useState({});
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/users/me`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          setLoggedUser(response.data.user);
        } catch (error) {
          console.error(
            "Erreur lors de la récupération des informations de l'utilisateur",
            error
          );
        }
      }
    };

    fetchUserData();
  }, []);

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
