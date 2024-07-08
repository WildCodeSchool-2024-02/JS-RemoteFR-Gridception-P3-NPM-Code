import { useState, useEffect } from "react";
import axios from "axios";

function AdminPage() {
  const [selectedSection, setSelectedSection] = useState("oeuvres-to-validate");
  const [oeuvres, setOeuvres] = useState([]);
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
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

  return (
    <main className="all-admin-content">
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
                <img
                  src={user.avatar}
                  alt={`${user.firstname} ${user.lastname}`}
                />
                <h2>
                  {user.firstname} {user.lastname}
                </h2>
              </div>
            ))}
          </article>
        </section>
      )}
      {selectedSection === "messages-infos" && (
        <section className="messages-infos-content">
          <h1 className="main-title-admin-section">Messages reçu:</h1>
          <article className="message-cards-container">
            {messages.map((message) => (
              <div key={message.id} className="message-card">
                <h2>De: {message.fullname}</h2>
                <p>{message.message}</p>
                <h3>Email :{message.mail}</h3>
              </div>
            ))}
          </article>
        </section>
      )}
    </main>
  );
}

export default AdminPage;
