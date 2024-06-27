import { useState } from "react";

function About() {
  const [selectedSection, setSelectedSection] = useState("rules");

  return (
    <main className="allContent">
      <section className="radioInput">
        <input
          name="value-radio"
          id="value-1"
          type="radio"
          checked={selectedSection === "rules"}
          onChange={() => setSelectedSection("rules")}
        />
        <label htmlFor="value-1" className="label">
          Règles du jeu
        </label>
        <input
          name="value-radio"
          id="value-2"
          type="radio"
          checked={selectedSection === "legalsMentions"}
          onChange={() => setSelectedSection("legalsMentions")}
        />
        <label htmlFor="value-2" className="label">
          Mentions Légales
        </label>
        <input
          name="value-radio"
          id="value-3"
          type="radio"
          checked={selectedSection === "cguContent"}
          onChange={() => setSelectedSection("cguContent")}
        />
        <label htmlFor="value-3" className="label">
          CGU
        </label>
      </section>
      {selectedSection === "rules" && (
        <section className="rulesContent">
          <h1 className="titleContent">Les règles</h1>
          <h2 className="description-game">
            Bienvenue dans le monde passionnant du street art ! Prêt à explorer,
            partager et gravir les échelons du classement ? Voici comment jouer
            :
          </h2>
          <h3 className="description-main-title">Règle 1 :</h3>
          <p className="description-details">
            Respect et Courtoisie Sois toujours respectueux ! Les œuvres
            offensantes ou illégales seront éliminées, et les mauvais joueurs
            pourraient être bannis. Le street art, c'est l'expression et le
            respect.
          </p>
          <h3 className="description-main-title">Règle 2 :</h3>
          <p className="description-details">
            Géolocalisation Active ta géolocalisation pour découvrir les œuvres
            autour de toi. Le GPS est ton meilleur allié pour explorer la ville
            et trouver des trésors cachés !
          </p>
          <h3 className="description-main-title">Règle 3 :</h3>
          <p className="description-details">
            Ajout d'Oeuvres Trouve une nouvelle œuvre de street art et
            partage-la avec la communauté. Télécharge une photo, indique sa
            position GPS, écris une description et mentionne l'artiste si tu le
            connais. Chaque œuvre doit être unique !
          </p>
          <h3 className="description-main-title">Règle 4 :</h3>
          <p className="description-details">
            Système de Points Voici comment gagner des points : Ajouter une
            nouvelle œuvre : +10 points Ajouter une photo supplémentaire à une
            œuvre existante : +5 points Accumule les points et grimpe dans le
            classement. Qui sera le maître du street art ?
          </p>
          <h3 className="description-main-title">Règle 5 :</h3>
          <p className="description-details">
            Contributions Photographiques Les photos doivent être nettes et
            représentatives de l'œuvre. Pas de photos floues ou volées !
            Mentionne toujours l'artiste si tu le connais et décris l'œuvre avec
            précision.
          </p>
          <h3 className="description-main-title">Règle 6 :</h3>
          <p className="description-details">
            Classement et Récompenses Plus tu contribues, plus tu gagnes des
            points et montes dans le classement. Des récompenses spéciales
            attendent les meilleurs contributeurs chaque mois. Montre ce que tu
            sais faire !
          </p>
          <h3 className="description-main-title">Règle 7 :</h3>
          <p className="description-details">
            Propriété Intellectuelle Respecte les droits des artistes. Ne
            prétends pas être l'auteur d'une œuvre si ce n'est pas le cas. Le
            street art, c'est du partage et du respect.
          </p>

          <h3 className="description-main-title">Règle 8 :</h3>
          <p className="description-details">
            Signaler un Contenu Si tu vois quelque chose d'inapproprié,
            signale-le. Ensemble, nous pouvons garder notre communauté sûre et
            respectueuse.
          </p>

          <h3 className="description-main-title">Règle 9 :</h3>
          <p className="description-details">
            Sécurité et Vie Privée Tes informations personnelles sont
            précieuses. Nous les protégeons et ne les partageons jamais sans ton
            consentement. Respecte aussi la vie privée des autres joueurs.
          </p>

          <h3 className="description-main-title">Règle 10 :</h3>
          <p className="description-details">
            Modifications et Mises à Jour Les règles du jeu peuvent changer.
            Nous te tiendrons informé des nouveautés. En continuant à jouer, tu
            acceptes les nouvelles règles.
          </p>
        </section>
      )}
      {selectedSection === "legalsMentions" && (
        <section className="legalsMentionsContent">
          <h1 className="titleContent">Mentions Légales</h1>
          <h3 className="description-main-title">1. Créateur du site</h3>
          <p className="description-details">
            Le site de recherche de street art est édité par : NPM Code Forme
            juridique : [Type de société] Adresse du siège social : [Adresse
            complète] Numéro de téléphone : [Numéro de téléphone] Adresse email
            : [Email de contact] Numéro SIRET : [Numéro SIRET] Directeur de la
            publication : [Nom du directeur]
          </p>

          <h3 className="description-main-title">2. Hébergeur du Site</h3>
          <p className="description-details">
            Le Site est hébergé par : Nom de l'hébergeur : [Nom de l'hébergeur]
            Adresse : [Adresse complète de l'hébergeur] Numéro de téléphone :
            [Numéro de téléphone de l'hébergeur] Adresse email : [Email de
            contact de l'hébergeur]
          </p>

          <h3 className="description-main-title">
            3. Propriété Intellectuelle
          </h3>
          <p className="description-details">
            Le contenu du Site (textes, images, vidéos, logos, etc.) est protégé
            par les lois en vigueur sur la propriété intellectuelle et
            appartient à [Votre Entreprise] ou fait l'objet d'une autorisation
            d'utilisation. Toute reproduction, représentation, modification,
            publication, adaptation de tout ou partie des éléments du Site, quel
            que soit le moyen ou le procédé utilisé, est interdite sans
            l'autorisation écrite préalable de NPM Code.
          </p>

          <h3 className="description-main-title">4. Données Personnelles</h3>
          <p className="description-details">
            Conformément à la loi Informatique et Libertés du 6 janvier 1978
            modifiée, et au Règlement Général sur la Protection des Données
            (RGPD) entré en vigueur le 25 mai 2018, les utilisateurs disposent
            d'un droit d'accès, de rectification, de suppression et d'opposition
            aux données personnelles les concernant. Pour exercer ce droit,
            veuillez nous contacter à l'adresse suivante : [Email de contact
            pour les données personnelles]
          </p>

          <h3 className="description-main-title">5. Cookies</h3>
          <p className="description-details">
            Le Site utilise des cookies pour améliorer l'expérience utilisateur,
            analyser le trafic et les performances du Site. En continuant à
            naviguer sur le Site, vous acceptez l'utilisation de cookies.
          </p>

          <h3 className="description-main-title">6. Responsabilité</h3>
          <p className="description-details">
            NPM Code ne saurait être tenue responsable des dommages directs ou
            indirects causés au matériel de l'utilisateur lors de l'accès au
            Site, résultant soit de l'utilisation d'un matériel ne répondant pas
            aux spécifications indiquées, soit de l'apparition d'un bug ou d'une
            incompatibilité. NPM Code ne pourra également être tenue responsable
            des dommages indirects (tels par exemple qu'une perte de marché ou
            perte d'une chance) consécutifs à l'utilisation du Site. Des espaces
            interactifs (possibilité de poser des questions dans l’espace
            contact) sont à la disposition des utilisateurs. NPM Code se réserve
            le droit de supprimer, sans mise en demeure préalable, tout contenu
            déposé dans cet espace qui contreviendrait à la législation
            applicable en France, en particulier aux dispositions relatives à la
            protection des données. Le cas échéant, [Votre Entreprise] se
            réserve également la possibilité de mettre en cause la
            responsabilité civile et/ou pénale de l’utilisateur, notamment en
            cas de message à caractère raciste, injurieux, diffamant, ou
            pornographique, quel que soit le support utilisé (texte,
            photographie …).
          </p>

          <h3 className="description-main-title">7. Liens Hypertextes</h3>
          <p className="description-details">
            Le Site peut contenir des liens hypertextes vers d'autres sites. NPM
            Code n'exerce aucun contrôle sur ces sites et n'assume aucune
            responsabilité quant à leur contenu. En conséquence, NPM Code
            décline toute responsabilité quant aux contenus, publicités,
            produits, services ou tout autre matériel disponible sur ou à partir
            de ces sites.
          </p>

          <h3 className="description-main-title">
            8. Droit Applicable et Attribution de Juridiction
          </h3>
          <p className="description-details">
            Tout litige en relation avec l'utilisation du Site est soumis au
            droit français. Il est fait attribution exclusive de juridiction aux
            tribunaux compétents de REMOTE City.
          </p>

          <h3 className="description-main-title">9. Contact</h3>
          <p className="description-details">
            Pour toute question concernant les mentions légales du Site, vous
            pouvez nous contacter à l'adresse suivante : [Email de contact]
          </p>
        </section>
      )}
      {selectedSection === "cguContent" && (
        <section className="cguContent">
          <h1 className="titleContent">Conditions Générales d'Utilisation</h1>

          <h3 className="description-main-title">1. Présentation du Site</h3>
          <p className="description-details">
            Le site de recherche de street art (ci-après dénommé "le Site")
            permet aux utilisateurs de découvrir et de partager des œuvres de
            street art géolocalisées. Les utilisateurs peuvent ajouter leurs
            propres contributions et visualiser celles des autres.
          </p>

          <h3 className="description-main-title">
            2. Acceptation des Conditions Générales
          </h3>
          <p className="description-details">
            En accédant et en utilisant le Site, vous acceptez sans réserve les
            présentes Conditions Générales d'Utilisation (CGU). Si vous
            n'acceptez pas ces termes, veuillez ne pas utiliser le Site.
          </p>

          <h3 className="description-main-title">3. Accès au Site</h3>
          <p className="description-details">
            L'accès au Site est ouvert à toute personne disposant d'un accès à
            internet. Les frais liés à l'accès au Site (matériel informatique,
            logiciels, connexion internet, etc.) sont à la charge de
            l'utilisateur.
          </p>

          <h3 className="description-main-title">
            4. Inscription et Compte Utilisateur
          </h3>
          <p className="description-details">
            L'inscription sur le Site peut être requise pour accéder à certaines
            fonctionnalités (ajout d'œuvres, système de points, etc.). Les
            utilisateurs doivent fournir des informations exactes et à jour lors
            de leur inscription. Chaque utilisateur est responsable de la
            confidentialité de ses identifiants de connexion et de toutes les
            activités effectuées sous son compte.
          </p>

          <h3 className="description-main-title">5. Utilisation du Site</h3>
          <p className="description-details">
            Les utilisateurs s'engagent à utiliser le Site de manière conforme à
            la loi et aux bonnes mœurs. Il est interdit de publier des contenus
            offensants, diffamatoires, obscènes, menaçants ou illégaux. Les
            utilisateurs s'engagent à ne pas porter atteinte aux droits d'auteur
            et aux droits de propriété intellectuelle des artistes.
          </p>

          <h3 className="description-main-title">
            6. Ajout et Partage de Contenus
          </h3>
          <p className="description-details">
            Les utilisateurs peuvent ajouter des œuvres de street art en
            fournissant une photo, une position GPS, une description et le nom
            de l'artiste, si connu. Les œuvres ajoutées doivent être uniques et
            ne pas déjà figurer sur le Site. Les photos doivent être de bonne
            qualité et représenter fidèlement l'œuvre.
          </p>

          <h3 className="description-main-title">
            7. Système de Points et Classement
          </h3>
          <p className="description-details">
            Ajouter une nouvelle œuvre non existante sur le Site rapporte +10
            points. Ajouter une photo supplémentaire à une œuvre existante
            rapporte +5 points. Les points accumulés permettent de se classer
            dans le tableau de bord du Site.
          </p>

          <h3 className="description-main-title">
            8. Propriété Intellectuelle
          </h3>
          <p className="description-details">
            Les utilisateurs garantissent que les contenus qu'ils publient ne
            violent pas les droits de propriété intellectuelle de tiers. Le Site
            respecte les droits d'auteur des artistes et s'engage à retirer tout
            contenu en infraction sur simple demande justifiée.
          </p>

          <h3 className="description-main-title">9. Modération des Contenus</h3>
          <p className="description-details">
            Le Site se réserve le droit de modérer, modifier ou supprimer tout
            contenu ne respectant pas les présentes CGU. Les utilisateurs
            peuvent signaler des contenus inappropriés ou incorrectement
            attribués via les outils de signalement du Site. Le Site ne saurait
            être tenu responsable des contenus publiés par les utilisateurs. Le
            Site décline toute responsabilité en cas d'indisponibilité, de
            dysfonctionnements ou d'erreurs techniques.
          </p>

          <h3 className="description-main-title">
            10. Protection des Données Personnelles
          </h3>
          <p className="description-details">
            Le Site s'engage à respecter la vie privée des utilisateurs et à
            protéger leurs données personnelles conformément aux lois en
            vigueur. Les données personnelles collectées sont utilisées
            uniquement pour les besoins du service et ne sont pas partagées sans
            consentement.
          </p>

          <h3 className="description-main-title">11. Modification des CGU</h3>
          <p className="description-details">
            Le Site se réserve le droit de modifier les présentes CGU à tout
            moment. Les utilisateurs seront informés des modifications
            importantes et sont invités à consulter régulièrement les CGU mises
            à jour.
          </p>

          <h3 className="description-main-title">
            12. Loi Applicable et Juridiction Compétente
          </h3>
          <p className="description-details">
            Les présentes CGU sont soumises au droit français. En cas de litige,
            et après échec de toute tentative de recherche d'une solution
            amiable, les tribunaux français seront seuls compétents. En
            utilisant le Site, vous acceptez de respecter ces Conditions
            Générales d'Utilisation. Merci de votre participation et de votre
            respect des règles établies pour le bénéfice de toute la communauté.
          </p>
        </section>
      )}
    </main>
  );
}

export default About;
