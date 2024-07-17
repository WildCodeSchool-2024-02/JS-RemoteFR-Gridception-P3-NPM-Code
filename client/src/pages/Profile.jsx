import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import AvatarChange from "../components/AvatarChange";
import UpdateInfoUser from "../components/UpdateInfoUser";

const AccordionContainer = styled(Accordion)(() => ({
  backgroundColor: "#d500f9",
  width: "30",
}));

const AccordionTitle = styled(AccordionSummary)(({ theme }) => ({
  justifyContent: "center",

  "& .AccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .AccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  borderRadius: "10px",
}));

const AccordionElements = styled(AccordionDetails)(({ theme }) => ({
  color: "white",
  padding: theme.spacing(2),
  backgroundColor: "color-mix(in srgb, var(--primary-color) 80%, transparent)",
  borderRadius: "10px",
}));

function Profile() {
  const { loggedUser } = useOutletContext();

  const dialogRef = useRef(null);
  const [expanded, setExpanded] = useState("");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [picturesStreetArt, setPicturesStreetArt] = useState([]);

  useEffect(() => {
    axios

      .get(
        `${import.meta.env.VITE_API_URL}/api/street_arts/users/${loggedUser?.id}`
      )
      .then((results) => {
        setPicturesStreetArt(results.data);
      })
      .catch((err) => console.info(err));
  }, [loggedUser.id]);

  return (
    <section className="profile-component">
      <div className="profil-informations">
        <article className="my-profil">
          <AvatarChange />
        </article>
        {/* Profil section for laptop */}

        <article className="my-informations">
          <ul>
            <li> Pseudo : {loggedUser.pseudo}</li>
            <li className="li-email"> Email : {loggedUser.email}</li>
          </ul>
          <button
            type="button"
            className="button-profil"
            onClick={() => {
              dialogRef.current?.showModal();
            }}
          >
            Modifier mes informations
          </button>
        </article>
      </div>

      <article className="profile-section">
        <h2>Mes Oeuvres</h2>
        <div className="my-street-art">
          {picturesStreetArt.map((streetArt) => (
            <img
              key={streetArt.id}
              src={streetArt.file}
              alt={streetArt.title}
            />
          ))}
        </div>
        <button type="button" className="button-add-oeuvre-into-profil">
          <Link to="/utilisateur/add">Ajouter une œuvre</Link>
        </button>
      </article>

      {/* Profil section for mobile */}

      <div className="profile-section-mobile">
        <article>
          <AccordionContainer
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionTitle>
              <Typography variant="h2">Mes Oeuvres</Typography>
            </AccordionTitle>
            <AccordionElements>
              <div className="my-street-art">
                {picturesStreetArt.map((picture) => (
                  <img
                    key={picture.id}
                    src={picture.file}
                    alt={picture.title}
                  />
                ))}
              </div>
            </AccordionElements>
          </AccordionContainer>
        </article>

        <article>
          <AccordionContainer
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionTitle>
              <Typography variant="h2">Mes infos</Typography>
            </AccordionTitle>
            <AccordionElements>
              <article className="my-informations-mobile">
                <ul>
                  <li> Email : {loggedUser.email}</li>
                  <li> ville : {loggedUser.city}</li>
                </ul>
                <button
                  type="button"
                  className="button-profil"
                  onClick={() => {
                    dialogRef.current?.showModal();
                  }}
                >
                  Modifier mes informations
                </button>
              </article>
            </AccordionElements>
          </AccordionContainer>
        </article>
      </div>

      <UpdateInfoUser dialogRef={dialogRef} />
    </section>
  );
}

export default Profile;
