import { useState } from "react";

function AdminPage() {
  const [selectedSection, setSelectedSection] = useState("oeuvres-to-validate");

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
        <section className="rules-content">
          <h1 className="main-title-admin-section">
            Oeuvres en attente d'aprobation:{" "}
          </h1>
        </section>
      )}
      {selectedSection === "users-infos" && (
        <section className="legals-mentions-content">
          <h1 className="main-title-admin-section">Liste des utilisateurs:</h1>
        </section>
      )}
      {selectedSection === "messages-infos" && (
        <section className="messages-infos">
          <h1 className="main-title-admin-section">Messages reçu:</h1>
        </section>
      )}
    </main>
  );
}

export default AdminPage;
