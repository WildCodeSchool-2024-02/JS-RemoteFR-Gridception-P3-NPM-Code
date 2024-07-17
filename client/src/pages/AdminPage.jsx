import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Valid from "../assets/images/validate.png";
import Delete from "../assets/images/delete.png";
import OeuvresToValidateWhite from "../assets/images/oeuvreattentewhite.png";
import OeuvresToValidateBlack from "../assets/images/oeuvreattenteblack.png";
import UsersIconWhite from "../assets/images/listeuserswhite.png";
import UsersIconBlack from "../assets/images/listeusersblack.png";
import MessagesWhite from "../assets/images/messageswhite.png";
import MessageBlack from "../assets/images/messagesblack.png";
import AllOeuvresBlack from "../assets/images/alloeuvresblack.png";
import AllOeuvresWhite from "../assets/images/alloeuvreswhite.png";

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
    if (selectedSection === "toutes-les-oeuvres") {
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/street_arts`)
        .then((results) => {
          setOeuvres(results.data.filter((oeuvre) => oeuvre.is_valid === 1));
        })
        .catch((err) => console.info(err));
    }
    if (selectedSection === "users-infos") {
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/users`)
        .then((results) => {
          setUsers(results.data.filter((user) => user.roles_id === 2));
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

  const handleValidateOeuvre = async (id) => {
    try {
      const result = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/street_arts/validate/${id}`,
        {
          is_valid: 1,
        }
      );

      const userToUpdate = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/users/${result.data.userToCredit}`
      );

      const updatedDatas = {
        id: userToUpdate.data.id,
        pseudo: userToUpdate.data.pseudo,
        firstname: userToUpdate.data.firstname,
        lastname: userToUpdate.data.lastname,
        email: userToUpdate.data.email,
        city: userToUpdate.data.city,
        avatar: userToUpdate.data.avatar,
        points: userToUpdate.data.points + 10,
        roles_id: userToUpdate.data.roles_id,
      };

      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/users/${result.data.userToCredit}`,
        updatedDatas
      );

      setOeuvres((prevOeuvres) =>
        prevOeuvres.filter((oeuvre) => oeuvre.id !== id)
      );

      toast.success("Oeuvre validée !");
    } catch (err) {
      console.error(err);
      toast.error(
        "Une erreur s'est produite lors de la validation de l'œuvre."
      );
    }
  };

  const handleDeleteOeuvre = (id) => {
    // Supprimer l'œuvre
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/street_arts/${id}`)
      .then(() => {
        setOeuvres((prevOeuvres) =>
          prevOeuvres.filter((oeuvre) => oeuvre.id !== id)
        );
        toast.success("Oeuvre supprimée avec succès !");
      })
      .catch((err) => {
        console.error(err);
        toast.error(
          "Une erreur s'est produite lors de la suppression de l'œuvre."
        );
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
        toast.error(
          "Une erreur s'est produite lors de la suppression de l'utilisateur."
        );
      });
  };

  const handleDeleteMessage = (id) => {
    // Pouvoir supprimer les messages reçus
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/contacts/${id}`)
      .then(() => {
        setMessages((prevMessages) =>
          prevMessages.filter((message) => message.id !== id)
        );
        toast.success("Message supprimé avec succès!");
      })
      .catch((err) => {
        console.error(err);
        toast.error(
          "Une erreur s'est produite lors de la suppression du message."
        );
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
          <img
            src={
              selectedSection === "oeuvres-to-validate"
                ? OeuvresToValidateWhite
                : OeuvresToValidateBlack
            }
            alt="User Icon"
          />
          <span className="label-text">Oeuvres en attente</span>
        </label>
        <input
          name="value-radio-admin"
          id="value-admin-2"
          type="radio"
          checked={selectedSection === "users-infos"}
          onChange={() => setSelectedSection("users-infos")}
        />
        <label htmlFor="value-admin-2" className="select-label-admin">
          <img
            src={
              selectedSection === "users-infos"
                ? UsersIconWhite
                : UsersIconBlack
            }
            alt="User Icon"
          />
          <span className="label-text">Utilisateurs</span>
        </label>
        <input
          name="value-radio-admin"
          id="value-admin-3"
          type="radio"
          checked={selectedSection === "messages-infos"}
          onChange={() => setSelectedSection("messages-infos")}
        />
        <label htmlFor="value-admin-3" className="select-label-admin">
          <img
            src={
              selectedSection === "messages-infos"
                ? MessagesWhite
                : MessageBlack
            }
            alt="User Icon"
          />
          <span className="label-text">Messages</span>
        </label>
        <input
          name="value-radio-admin"
          id="value-admin-4"
          type="radio"
          checked={selectedSection === "toutes-les-oeuvres"}
          onChange={() => setSelectedSection("toutes-les-oeuvres")}
        />
        <label htmlFor="value-admin-4" className="select-label-admin">
          <img
            src={
              selectedSection === "toutes-les-oeuvres"
                ? AllOeuvresWhite
                : AllOeuvresBlack
            }
            alt="Oeuvres valide Icon"
          />
          <span className="label-text">Toutes les oeuvres</span>
        </label>
      </section>

      {selectedSection === "oeuvres-to-validate" && (
        <section className="oeuvres-content">
          <h1 className="main-title-admin-section">Oeuvres en attente :</h1>
          <article className="oeuvre-cards-container">
            {oeuvres.map((oeuvre) => (
              <div key={oeuvre.id} className="oeuvre-card">
                <h2>{oeuvre.title}</h2>
                <img
                  className="picture-oeuvre"
                  src={oeuvre.file}
                  alt={oeuvre.title}
                />
                <h3>Artiste : {oeuvre.artist}</h3>
                <h3>Description : </h3>
                <p>{oeuvre.description}</p>
                <div className="boutons-validate-refuse">
                  <button
                    type="button"
                    className="button-to-validate"
                    onClick={() => handleValidateOeuvre(oeuvre.id)}
                  >
                    <img
                      src={Valid}
                      alt="Valider"
                      className="logo-to-validate-refuse"
                    />
                  </button>

                  <button
                    type="button"
                    className="button-to-refuse"
                    onClick={() => handleDeleteOeuvre(oeuvre.id)}
                  >
                    <img src={Delete} alt="Ne pas valider" />
                  </button>
                </div>
              </div>
            ))}
          </article>
        </section>
      )}

      {selectedSection === "users-infos" && (
        <section className="users-content-admin">
          <h1 className="main-title-admin-section">Liste des utilisateurs :</h1>
          <article className="user-cards-container">
            {users.map((user) => (
              <div key={user.id} className="user-card">
                <img
                  src={user.avatar}
                  alt={`${user.firstname} ${user.lastname}`}
                />
                <h2>{user.pseudo}</h2>
                <h2>
                  {user.firstname} {user.lastname}
                </h2>
                <button
                  type="button"
                  className="button-delete-users"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  {" "}
                  ""
                  <svg viewBox="0 0 448 512" className="svgIcon">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </button>
              </div>
            ))}
          </article>
        </section>
      )}
      {selectedSection === "messages-infos" && (
        <section className="messages-infos-content">
          <h1 className="main-title-admin-section">Messages reçus :</h1>
          <article className="message-cards-container">
            {messages.map((message) => (
              <div key={message.id} className="message-card">
                <h2>De: {message.fullname}</h2>
                <p>{message.message}</p>
                <h3>Email :{message.mail}</h3>
                <button
                  type="button"
                  className="button-delete-users"
                  onClick={() => handleDeleteMessage(message.id)}
                >
                  ""
                  <svg viewBox="0 0 448 512" className="svgIcon">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </button>
              </div>
            ))}
          </article>
        </section>
      )}
      {selectedSection === "toutes-les-oeuvres" && (
        <section className="oeuvres-content">
          <h1 className="main-title-admin-section">Toutes les oeuvres :</h1>
          <article className="oeuvre-cards-container">
            {oeuvres.map((oeuvre) => (
              <div key={oeuvre.id} className="oeuvre-card">
                <h2>{oeuvre.title}</h2>
                <img
                  src={oeuvre.file}
                  alt={oeuvre.title}
                  className="picture-oeuvre"
                />
                <h3>Artiste : {oeuvre.artist}</h3>
                <h3>Description : </h3>
                <p>{oeuvre.description}</p>
                <button
                  type="button"
                  className="button-delete-users"
                  onClick={() => handleDeleteOeuvre(oeuvre.id)}
                >
                  {" "}
                  ""
                  <svg viewBox="0 0 448 512" className="svgIcon">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
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
