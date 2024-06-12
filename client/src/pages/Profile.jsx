import * as React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import User from "../assets/images/user_profil.png";

const AccordionContainer = styled(Accordion)(() => ({
  backgroundColor: "transparent",
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
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const pictures = useLoaderData();

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
              <img src="" alt="" />
              <Link
                to={`/pictures/${pictures.id}/streetarts/:id/users/:id/edit`}
              >
                Modifier
              </Link>
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
