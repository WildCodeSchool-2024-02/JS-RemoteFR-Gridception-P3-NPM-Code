import { useState, useEffect } from "react";
import axios from "axios";

function AdminPage() {
  const [selectedSection, setSelectedSection] = useState("oeuvres-to-validate");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (selectedSection === "users-infos") {
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/users`)
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the users!", error);
        });
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
          <h1 className="main-title-admin-section">
            Oeuvres en attente d'aprobation:{" "}
          </h1>
        </section>
      )}
      {selectedSection === "users-infos" && (
        <section className="users-content-admin">
          <h1 className="main-title-admin-section">Liste des utilisateurs:</h1>
          <div className="user-cards-container">
            {users.map((user) => (
              <div key={user.id} className="user-card">
                <img
                  src={user.avatar}
                  alt={`${user.firstname} ${user.lastname}`}
                />
                <p>
                  {user.firstname} {user.lastname}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
      {selectedSection === "messages-infos" && (
        <section className="messages-infos-content">
          <h1 className="main-title-admin-section">Messages reçu:</h1>
        </section>
      )}
    </main>
  );
}

export default AdminPage;
