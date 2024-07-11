import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

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
        const expirationDate = jwtDecode(token).exp * 1000;
        const currentDate = Date.now();

        if (expirationDate >= currentDate) {
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
      }
    };

    fetchUserData();
  }, []);

  const handleNavigate = () => {
    if (loggedUser.id) {
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
      <NavBar
        closeLoginPopup={closeLoginPopup}
        loggedUser={loggedUser}
        showLoginPopup={showLoginPopup}
        setLoggedUser={setLoggedUser}
        handleNavigate={handleNavigate}
      />
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
