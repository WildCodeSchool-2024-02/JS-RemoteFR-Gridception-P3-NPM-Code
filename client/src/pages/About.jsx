import { useState } from "react";

function About() {
  const [selectedSection, setSelectedSection] = useState("value-1");

  return (
    <main className="allContent">
      <section className="radioInput">
        <input
          name="value-radio"
          id="value-1"
          type="radio"
          checked={selectedSection === "value-1"}
          onChange={() => setSelectedSection("value-1")}
        />
        <label htmlFor="value-1" className="label">
          Règles
        </label>
        <input
          value="value-2"
          name="value-radio"
          id="value-2"
          type="radio"
          checked={selectedSection === "value-2"}
          onChange={() => setSelectedSection("value-2")}
        />
        <label htmlFor="value-2" className="label">
          Conditions général
        </label>
        <input
          value="value-3"
          name="value-radio"
          id="value-3"
          type="radio"
          checked={selectedSection === "value-3"}
          onChange={() => setSelectedSection("value-3")}
        />
        <label htmlFor="value-3" className="label">
          CGU
        </label>
      </section>
      {selectedSection === "value-1" && (
        <section className="rulesContent">
          <h1>Les règles</h1>
          <p>Le but est de trouver des oeuvres d'art</p>
        </section>
      )}
      {selectedSection === "value-2" && (
        <section className="conditionsContent">
          <h1>Conditions Général</h1>
          <p>Voici les conditions général</p>
        </section>
      )}
      {selectedSection === "value-3" && (
        <section className="cguContent">
          <h1>CGU</h1>
          <p>Yo je suis le CGU</p>
        </section>
      )}
    </main>
  );
}

export default About;
