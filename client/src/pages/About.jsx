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
          Règles du jeu
        </label>
        <input
          name="value-radio"
          id="value-2"
          type="radio"
          checked={selectedSection === "value-2"}
          onChange={() => setSelectedSection("value-2")}
        />
        <label htmlFor="value-2" className="label">
          Mentions Légales
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
          <h1>Mentions Légales</h1>
          <p>
            1. Éditeur du Site Le site de recherche de street art (ci-après "le
            Site") est édité par : Nom de l'entreprise : [Votre Entreprise]
            Forme juridique : [Type de société] Adresse du siège social :
            [Adresse complète] Numéro de téléphone : [Numéro de téléphone]
            Adresse email : [Email de contact] Numéro SIRET : [Numéro SIRET]
            Directeur de la publication : [Nom du directeur]
            <br />
            2. Hébergeur du Site Le Site est hébergé par : Nom de l'hébergeur :
            [Nom de l'hébergeur] Adresse : [Adresse complète de l'hébergeur]
            Numéro de téléphone : [Numéro de téléphone de l'hébergeur] Adresse
            email : [Email de contact de l'hébergeur] <br />
            3. Propriété Intellectuelle Le contenu du Site (textes, images,
            vidéos, logos, etc.) est protégé par les lois en vigueur sur la
            propriété intellectuelle et appartient à [Votre Entreprise] ou fait
            l'objet d'une autorisation d'utilisation. Toute reproduction,
            représentation, modification, publication, adaptation de tout ou
            partie des éléments du Site, quel que soit le moyen ou le procédé
            utilisé, est interdite sans l'autorisation écrite préalable de
            [Votre Entreprise].
            <br />
            4. Données Personnelles Conformément à la loi Informatique et
            Libertés du 6 janvier 1978 modifiée, et au Règlement Général sur la
            Protection des Données (RGPD) entré en vigueur le 25 mai 2018, les
            utilisateurs disposent d'un droit d'accès, de rectification, de
            suppression et d'opposition aux données personnelles les concernant.
            Pour exercer ce droit, veuillez nous contacter à l'adresse suivante
            : [Email de contact pour les données personnelles] 5. Cookies Le
            Site utilise des cookies pour améliorer l'expérience utilisateur,
            analyser le trafic et les performances du Site. En continuant à
            naviguer sur le Site, vous acceptez l'utilisation de cookies.
            <br />
            6. Responsabilité [Votre Entreprise] ne saurait être tenue
            responsable des dommages directs ou indirects causés au matériel de
            l'utilisateur lors de l'accès au Site, résultant soit de
            l'utilisation d'un matériel ne répondant pas aux spécifications
            indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.
            [Votre Entreprise] ne pourra également être tenue responsable des
            dommages indirects (tels par exemple qu'une perte de marché ou perte
            d'une chance) consécutifs à l'utilisation du Site. Des espaces
            interactifs (possibilité de poser des questions dans l’espace
            contact) sont à la disposition des utilisateurs. [Votre Entreprise]
            se réserve le droit de supprimer, sans mise en demeure préalable,
            tout contenu déposé dans cet espace qui contreviendrait à la
            législation applicable en France, en particulier aux dispositions
            relatives à la protection des données. Le cas échéant, [Votre
            Entreprise] se réserve également la possibilité de mettre en cause
            la responsabilité civile et/ou pénale de l’utilisateur, notamment en
            cas de message à caractère raciste, injurieux, diffamant, ou
            pornographique, quel que soit le support utilisé (texte,
            photographie …). <br />
            7. Liens Hypertextes Le Site peut contenir des liens hypertextes
            vers d'autres sites. [Votre Entreprise] n'exerce aucun contrôle sur
            ces sites et n'assume aucune responsabilité quant à leur contenu. En
            conséquence, [Votre Entreprise] décline toute responsabilité quant
            aux contenus, publicités, produits, services ou tout autre matériel
            disponible sur ou à partir de ces sites.
            <br />
            8. Droit Applicable et Attribution de Juridiction Tout litige en
            relation avec l'utilisation du Site est soumis au droit français. Il
            est fait attribution exclusive de juridiction aux tribunaux
            compétents de [Ville où se situe votre entreprise]. <br />
            9. Contact Pour toute question concernant les mentions légales du
            Site, vous pouvez nous contacter à l'adresse suivante : [Email de
            contact]
          </p>
        </section>
      )}
      {selectedSection === "value-3" && (
        <section className="cguContent">
          <h1>Conditions Général d'Utilisation</h1>
          <p>
            1. Présentation du Site Le site de recherche de street art (ci-après
            dénommé "le Site") permet aux utilisateurs de découvrir et de
            partager des œuvres de street art géolocalisées. Les utilisateurs
            peuvent ajouter leurs propres contributions et visualiser celles des
            autres. <br />
            2. Acceptation des Conditions Générales En accédant et en utilisant
            le Site, vous acceptez sans réserve les présentes Conditions
            Générales d'Utilisation (CGU). Si vous n'acceptez pas ces termes,
            veuillez ne pas utiliser le Site. <br />
            3. Accès au Site L'accès au Site est ouvert à toute personne
            disposant d'un accès à internet. Les frais liés à l'accès au Site
            (matériel informatique, logiciels, connexion internet, etc.) sont à
            la charge de l'utilisateur. <br />
            4. Inscription et Compte Utilisateur L'inscription sur le Site peut
            être requise pour accéder à certaines fonctionnalités (ajout
            d'œuvres, système de points, etc.). Les utilisateurs doivent fournir
            des informations exactes et à jour lors de leur inscription. Chaque
            utilisateur est responsable de la confidentialité de ses
            identifiants de connexion et de toutes les activités effectuées sous
            son compte. <br />
            5. Utilisation du Site Les utilisateurs s'engagent à utiliser le
            Site de manière conforme à la loi et aux bonnes mœurs. <br />
            Il est interdit de publier des contenus offensants, diffamatoires,
            obscènes, menaçants ou illégaux. Les utilisateurs s'engagent à ne
            pas porter atteinte aux droits d'auteur et aux droits de propriété
            intellectuelle des artistes. <br />
            6. Ajout et Partage de Contenus Les utilisateurs peuvent ajouter des
            œuvres de street art en fournissant une photo, une position GPS, une
            description et le nom de l'artiste, si connu. Les œuvres ajoutées
            doivent être uniques et ne pas déjà figurer sur le Site. Les photos
            doivent être de bonne qualité et représenter fidèlement l'œuvre.{" "}
            <br />
            7. Système de Points et Classement Ajouter une nouvelle œuvre non
            existante sur le Site rapporte +10 points. Ajouter une photo
            supplémentaire à une œuvre existante rapporte +5 points. Les points
            accumulés permettent de se classer dans le tableau de bord du Site.{" "}
            <br />
            8. Propriété Intellectuelle Les utilisateurs garantissent que les
            contenus qu'ils publient ne violent pas les droits de propriété
            intellectuelle de tiers. Le Site respecte les droits d'auteur des
            artistes et s'engage à retirer tout contenu en infraction sur simple
            demande justifiée. <br />
            9. Modération des Contenus Le Site se réserve le droit de modérer,
            modifier ou supprimer tout contenu ne respectant pas les présentes
            CGU. Les utilisateurs peuvent signaler des contenus inappropriés ou
            incorrectement attribués via les outils de signalement du Site.{" "}
            <br />
            Le Site ne saurait être tenu responsable des contenus publiés par
            les utilisateurs. Le Site décline toute responsabilité en cas
            d'indisponibilité, de dysfonctionnements ou d'erreurs techniques.
            <br />
            11. Protection des Données Personnelles Le Site s'engage à respecter
            la vie privée des utilisateurs et à protéger leurs données
            personnelles conformément aux lois en vigueur. Les données
            personnelles collectées sont utilisées uniquement pour les besoins
            du service et ne sont pas partagées sans consentement.
            <br />
            12. Modification des CGU Le Site se réserve le droit de modifier les
            présentes CGU à tout moment. Les utilisateurs seront informés des
            modifications importantes et sont invités à consulter régulièrement
            les CGU mises à jour.
            <br />
            13. Loi Applicable et Juridiction Compétente Les présentes CGU sont
            soumises au droit français. En cas de litige, et après échec de
            toute tentative de recherche d'une solution amiable, les tribunaux
            français seront seuls compétents. En utilisant le Site, vous
            acceptez de respecter ces Conditions Générales d'Utilisation. Merci
            de votre participation et de votre respect des règles établies pour
            le bénéfice de toute la communauté.
          </p>
        </section>
      )}
    </main>
  );
}

export default About;
