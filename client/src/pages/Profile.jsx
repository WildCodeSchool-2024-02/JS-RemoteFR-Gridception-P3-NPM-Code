import * as React from "react";

import {
  Styles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Typography from "@mui/material/Typography";
// import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import User from "../assets/images/user_profil.png";

const AccordionContainer = Styles(Accordion)(() => ({
  backgroundColor: "transparent",
}));

const AccordionTitle = Styles(AccordionSummary)(({ theme }) => ({
  justifyContent: "center",
  "& .AccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .AccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionElements = Styles(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "color-mix(in srgb, var(--primary-color) 90%, transparent)",
}));

function Profile() {
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section className="ProfileComponent">
      <img src={User} alt="profil utilisateur" />
      <h1>Username</h1>

      <p className="counterPoint">Points</p>

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
              <p>pour test</p>
            </AccordionElements>
          </AccordionContainer>
        </section>
        <section>
          <AccordionContainer
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionTitle>
              <Typography variant="h2">Mes favoris</Typography>
            </AccordionTitle>
            <AccordionElements>
              <p>pour test</p>
            </AccordionElements>
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
            <AccordionElements>
              <p>pour test</p>
            </AccordionElements>
          </AccordionContainer>
        </section>
      </div>

      {/* Profil section for laptop */}
      <div className="ProfileSection">
        <section>
          <h2>Mes Oeuvres</h2>
          <p>pour test</p>
        </section>
        <section>
          <h2>Mes favoris</h2>

          <p>pour test</p>
        </section>
        <section>
          <h2>Mes infos</h2>
          <p>pour test</p>
        </section>
      </div>
    </section>
  );
}

export default Profile;
