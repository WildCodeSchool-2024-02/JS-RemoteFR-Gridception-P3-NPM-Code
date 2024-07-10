import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Valid from "../assets/images/validate.png";
import Delete from "../assets/images/delete.png";

function AdminPage() {
  const [selectedSection, setSelectedSection] = useState("oeuvres-to-validate");
  const [oeuvres, setOeuvres] = useState([]);
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Récuperer les infos du back à afficher dans les différents menus
    if (selectedSection === "oeuvres-to-validate") {
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/street_arts`)
        .then((results) => {
          setOeuvres(results.data.filter((oeuvre) => oeuvre.is_valid === 0));
        })
        .catch((err) => console.info(err));
    }
    if (selectedSection === "users-infos") {
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/users`)
        .then((results) => {
          setUsers(results.data);
        })
        .catch((err) => console.info(err));
    }

    if (selectedSection === "messages-infos") {
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/contacts`)
        .then((results) => {
          setMessages(results.data);
        })
        .catch((err) => console.info(err));
    }
  }, [selectedSection]);

   const handleValidateOeuvre = (id) => {
    // Mettre à jour l'œuvre pour is_valid=1
    axios
      .put(`${import.meta.env.VITE_API_URL}/api/street_arts/${id}, { is_valid: 1 }`)
      .then(() => {
        setOeuvres((prevOeuvres) => prevOeuvres.filter((oeuvre) => oeuvre.id !== id));
       toast.success("Oeuvre validé !");
      })
      .catch((err) => console.error(err));
       toast.error("Une erreur s'est produite lors de la validation de l'œuvre.");
  };

  const handleDeleteOeuvre = (id) => {
    // Supprimer l'œuvre
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/street_arts/${id}`)
      .then(() => {
        setOeuvres((prevOeuvres) => prevOeuvres.filter((oeuvre) => oeuvre.id !== id));
        toast.success("Oeuvre supprimée avec succès !");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Une erreur s'est produite lors de la suppression de l'œuvre.");
      });
  };

  const handleDeleteUser = (id) => {
    // Pouvoir supprimer un user
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/users/${id}`)
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
        toast.success("Utilisateur supprimé avec succès !");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Une erreur s'est produite lors de la suppression de l'utilisateur.");
      });
  };

  const handleDeleteMessage = (id) => {
    // Pouvoir supprimer les messages reçus
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/contacts/${id}`)
      .then(() => {
        setMessages((prevMessages) => prevMessages.filter((message) => message.id !== id));
        toast.success("Message supprimé avec succès!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Une erreur s'est produite lors de la suppression du message.");
      });
  };

  return (
    <main className="all-admin-content">
      <ToastContainer />
      <section className="select-admin-content-button">
        <input
          name="value-radio-admin"
          id="value-admin-1"
          type="radio"
          checked={selectedSection === "oeuvres-to-validate"}
          onChange={() => setSelectedSection("oeuvres-to-validate")}
        />
        <label htmlFor="value-admin-1" className="select-label-admin">
          Oeuvres ⌛
        </label>
        <input
          name="value-radio-admin"
          id="value-admin-2"
          type="radio"
          checked={selectedSection === "users-infos"}
          onChange={() => setSelectedSection("users-infos")}
        />
        <label htmlFor="value-admin-2" className="select-label-admin">
          Utilisateurs 🤠
        </label>
        <input
          name="value-radio-admin"
          id="value-admin-3"
          type="radio"
          checked={selectedSection === "messages-infos"}
          onChange={() => setSelectedSection("messages-infos")}
        />
        <label htmlFor="value-admin-3" className="select-label-admin">
          Messages 📫
        </label>
      </section>

      {selectedSection === "oeuvres-to-validate" && (
        <section className="oeuvres-content">
          <h1 className="main-title-admin-section">Oeuvres en attente :</h1>
          <article className="oeuvre-cards-container">
            {oeuvres.map((oeuvre) => (
              <div key={oeuvre.id} className="oeuvre-card">
                <h2>{oeuvre.title}</h2>
                <img src={oeuvre.file} alt={oeuvre.title} />
                <h3>Artiste: {oeuvre.artist}</h3>
                <h3>Description: </h3>
                <p>{oeuvre.description}</p>
                <button type="button" className="button-to-validate" onClick={() => handleValidateOeuvre(oeuvre.id)}>
                  <img src={Valid} alt="Valider" />
                  Valider l'oeuvre
                </button>
                <button type="button" className="button-to-refuse" onClick={() => handleDeleteOeuvre(oeuvre.id)}>
                  <img src={Delete} alt="Ne pas valider" />
                  Refuser l'oeuvre
                </button>
              </div>
            ))}
          </article>
        </section>
      )}
      {selectedSection === "users-infos" && (
        <section className="users-content-admin">
          <h1 className="main-title-admin-section">Liste des utilisateurs:</h1>
          <article className="user-cards-container">
            {users.map((user) => (
              <div key={user.id} className="user-card">
                <img src={user.avatar} alt={`${user.firstname} ${user.lastname}`} />
                <h2>
                  {user.firstname} {user.lastname}
                </h2>
                <button type="button" className="button-to-delete" onClick={() => handleDeleteUser(user.id)}>
                  Supprimer l'utilisateur
                  <img src={Delete} alt="Ne pas valider" />
                </button>
              </div>
            ))}
          </article>
        </section>
      )}
      {selectedSection === "messages-infos" && (
        <section className="messages-infos-content">
          <h1 className="main-title-admin-section">Messages reçus:</h1>
          <article className="message-cards-container">
            {messages.map((message) => (
              <div key={message.id} className="message-card">
                <h2>De: {message.fullname}</h2>
                <p>{message.message}</p>
                <h3>Email :{message.mail}</h3>
                <button type="button" className="button-message-delete" onClick={() => handleDeleteMessage(message.id)}>
                  Supprimer le message
                  <img src={Delete} alt="Ne pas valider" />
                </button>
              </div>
            ))}
          </article>
        </section>
      )}
    </main>
  );
}

export default AdminPage;
