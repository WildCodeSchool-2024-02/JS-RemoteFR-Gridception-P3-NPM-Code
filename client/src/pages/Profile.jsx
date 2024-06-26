import React, { useEffect, useState } from "react";
import axios from "axios";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import AvatarChange from "../components/AvatarChange";

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
  const [expanded, setExpanded] = React.useState("");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [picturesStreetArt, setPicturesStreetArt] = useState([]);

  useEffect(() => {
    axios

      .get(`${import.meta.env.VITE_API_URL}/api/pictures/street_arts/users/10`)
      .then((results) => {
        setPicturesStreetArt(results.data);
      })
      .catch((err) => console.info(err));
  });

  return (
    <section className="ProfileComponent">
      <AvatarChange />

      <p className="counterPoint">69 Points</p>

      <div className="ProfileSectionMobile">
        <section>
          <AccordionContainer
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionTitle>
              <Typography variant="h2">Mes Oeuvres</Typography>
            </AccordionTitle>
            <AccordionElements>
              <div className="myArtStreet ">
                {picturesStreetArt.map((picture) => (
                  <img key={picture.id} src={picture.url} alt={picture.name} />
                ))}
              </div>
            </AccordionElements>
          </AccordionContainer>
        </section>
        <section>
          <AccordionContainer
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionTitle>
              <Typography variant="h2">Mes Badges</Typography>
            </AccordionTitle>
            <AccordionElements>{/* <p>pour test</p> */}</AccordionElements>
          </AccordionContainer>
        </section>
        <section>
          <AccordionContainer
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionTitle>
              <Typography variant="h2">Mes infos</Typography>
            </AccordionTitle>
            <AccordionElements>{/* <p>pour test</p> */}</AccordionElements>
          </AccordionContainer>
        </section>
      </div>

      {/* Profil section for laptop */}
      <div className="ProfileSection">
        <section>
          <h2>Mes Oeuvres</h2>
          <div className="myStreetArt">
            {picturesStreetArt.map((streetArt) => (
              <img
                key={streetArt.id}
                src={streetArt.url}
                alt={streetArt.name}
              />
            ))}
          </div>
        </section>
        <section>
          <h2>Mes Badges</h2>
        </section>
        <section>
          <h2>Mes infos</h2>
        </section>
      </div>
    </section>
  );
}

export default Profile;
