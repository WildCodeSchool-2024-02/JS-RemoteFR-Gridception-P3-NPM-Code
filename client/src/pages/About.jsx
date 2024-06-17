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
          <p>
            Le but est de trouver des oeuvres d'art Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quis sit harum provident veniam,
            suscipit tenetur totam corporis architecto expedita et beatae in,
            sint amet. Officia suscipit perspiciatis corporis nesciunt ullam.
            Architecto recusandae esse aspernatur nemo eum, commodi tenetur qui
            veritatis quod laboriosam explicabo, deleniti eos, maxime nihil
            maiores quidem vel sunt. Ad aliquid voluptates laudantium maxime
            excepturi cum nisi voluptate! Sint explicabo consequatur ex libero
            totam inventore hic cum qui ratione assumenda, eum voluptatibus
            tenetur voluptate voluptates officiis eveniet quae? Nobis ab dolore
            adipisci quia, eius asperiores magni maxime blanditiis.
          </p>
        </section>
      )}
      {selectedSection === "value-2" && (
        <section className="conditionsContent">
          <h1>Conditions Général</h1>
          <p>
            Voici les conditions général Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Placeat, nam consectetur accusamus doloribus
            voluptas iure porro aperiam ad beatae dolores suscipit, magni
            praesentium dignissimos sequi optio, magnam facilis inventore vel.
            Ducimus eligendi quis optio fuga perspiciatis, explicabo dolore, aut
            sed facilis harum dolorum quos fugiat officia amet molestias, nemo
            iusto quia. Velit quam ex aperiam at, maiores explicabo
            reprehenderit obcaecati. At nobis ea aperiam rem exercitationem
            doloremque nisi soluta, accusamus fugit iure voluptate porro iusto
            temporibus non! Suscipit perspiciatis quia error! Nihil a harum
            quibusdam distinctio, et sapiente dolorem aut? Ut tempora
            repudiandae possimus, autem inventore adipisci, alias laudantium
            praesentium sequi numquam vitae illo ex, cumque maiores nihil
            suscipit in et accusantium harum facere. Velit suscipit quibusdam
            corporis laudantium iure. Totam accusantium, dolor fugit accusamus
            suscipit consequatur provident minima sunt esse voluptate corporis
            laboriosam inventore similique incidunt amet magni et! Magni quas
            iste vero? Alias, nisi eaque. Sint, accusantium libero.
          </p>
        </section>
      )}
      {selectedSection === "value-3" && (
        <section className="cguContent">
          <h1>CGU</h1>
          <p>
            Yo je suis le CGU Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Asperiores accusantium at, libero dolorem deleniti quae, ea
            doloribus possimus magni omnis eius, amet deserunt. Magnam alias, in
            velit a obcaecati dolore. Possimus provident excepturi labore ipsum
            magni! Ex impedit officia nemo animi et labore ad minus tempore,
            culpa illum provident perspiciatis dicta optio voluptatibus dolor
            officiis ipsam perferendis. Quae, explicabo nesciunt? Doloremque
            necessitatibus sed beatae labore sequi odit harum magni quam nemo.
            Inventore, minima! Ducimus officiis iure qui amet adipisci
            repudiandae quaerat quo porro dolor quae est culpa, laudantium
            repellat eveniet! Adipisci placeat necessitatibus dicta magni,
            accusantium velit eaque itaque corrupti asperiores, deleniti vel
            dignissimos architecto? Ab, maxime? Quis praesentium ipsam, at, odit
            facilis ad maxime sit veniam sequi natus accusamus. Temporibus ipsum
            et accusantium quam odio tempora sint. Neque officiis sint
            reiciendis quod deleniti fugit sit fugiat dolorem tempore eveniet
            corporis saepe debitis voluptatibus voluptatem nisi maxime veniam,
            impedit veritatis?
          </p>
        </section>
      )}
    </main>
  );
}

export default About;
