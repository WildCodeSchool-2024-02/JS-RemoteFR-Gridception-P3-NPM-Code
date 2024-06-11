import japonaise from "../assets/images/imageOeuvres/soleillevant.jpg";
import japonaise2 from "../assets/images/imageOeuvres/japonaiseparasol.jpg";
import mermet from "../assets/images/imageOeuvres/escaliersmermet.webp";
import van from "../assets/images/imageOeuvres/MissVan.jpg";

const oeuvres = [
  {
    name: "Japonaise dénudée",
    image: japonaise,
    longitude: 0.680149,
    latitude: 47.396588,
    description:
      " la femme est légèrement dénudée. Elle laisse glisser son kimono, imprimé de signes rouges, faisant apparaître son épaule droite. Le regard vers le bas, les cheveux noirs noués et le teint blanc. Elle est synonyme de sensualité. Sous les marronniers du bord de Loire, elle colore un paravent en tôle qui cache les toilettes des hommes.",
    localitée: "Tours",
  },
  {
    name: "Japonaise avec un baton",
    image: japonaise2,
    longitude: 0.685538,
    latitude: 47.395229,
    description:
      "tient une sorte de bâton noir. Elle regarde à droite. Sa tête est englobée par un soleil flamboyant.",
    localitée: "Tours",
  },
  {
    name: "Les escaliers de Mermet",
    image: mermet,
    longitude: 4.833948,
    latitude: 45.770281,
    description:
      "escaliers Mermet (passage Mermet) métamorphosés par Wenc en collaboration avec des lyonnais qui ont pu s’initier au street-art à ces côtés. Ce projet commun fut mené lors de l’annuel festival peinture fraîche, à la demande de l’association Quartiers Capucins qui souhaitait voir cet escalier de 80 marches magnifié.",
    localitée: "Lyon",
  },
  {
    name: "Miss Van",
    image: van,
    longitude: 1.441158,
    latitude: 43.597632,
    description:
      "En flânant dans les rues du quartier des Carmes, on découvre une fresque imposante intitulée « La Symphonie des Songes ». Connue pour ses pin-up qui ont évolué avec le temps et ont gagné en expressivité, Miss Van a composé une œuvre gigantesque dans le cadre du festival des cultures urbaines Rose Béton. Cette fresque peinte intégralement au pinceau représente une figure féminine entourée de masques inspirés de différentes cultures du monde. L’harmonie des couleurs et la finesse du trait nous plongent dans l’univers onirique de l’artiste toulousaine.",
    localitée: "Toulouse",
  },
];

export default oeuvres;
