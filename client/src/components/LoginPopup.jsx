import { useOutletContext } from "react-router-dom";

function LoginPopup() {
  const { setIsLoggedIn, setShowLoginPopup } = useOutletContext();

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginPopup(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowLoginPopup(false);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Connexion</h2>
        <button type="button" onClick={handleLogin}>
          Se connecter
        </button>
        <button type="button" onClick={handleLogout}>
          Se déconnecter
        </button>
        <button type="button" onClick={() => setShowLoginPopup(false)}>
          Fermer
        </button>
      </div>
    </div>
  );
}

export default LoginPopup;
