import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import tetrispurple from "../assets/images/tetrispurple.png";
import tetrisyellow from "../assets/images/tetrisyellow.png";
import tetrispurple2 from "../assets/images/tetrispurple2.png";
import tetrisyellow2 from "../assets/images/tetrisyellow2.png";
import dot from "../assets/images/dot_icon.png";
import logo from "../assets/images/logo.png";



export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#DEA9F6",
        paddingTop: "2rem",
        display: "flex",
        justifyContent: "start",
        alignItems: "flex-start",
        flexDirection: "column",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 200,
        zIndex: 2,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <img src={logo} alt="logo du site " className="logoInDrawer" />
      <List>
        <a href="#Home" className="linkNav">
          {["test"].map((text) => (
            <ListItem key={text}  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img
                    src={tetrispurple}
                    alt="accueil icon"
                    className="NavIcon"
                  />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </a>
      </List>

      <Divider />
      <List>
        <a href="#AboutMe">
          {["CGU / Regle"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img
                    src={tetrisyellow}
                    alt="a propos icon"
                    className="NavIcon"
                  />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </a>
      </List>
      <Divider />
      <List>
        <a href="#Project">
          {["test"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img
                    src={tetrispurple2}
                    alt="projets icon"
                    className="NavIcon"
                  />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </a>
      </List>
      <Divider />
      <List>
        <a href="#Contact">
          {["Contact"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img
                    src={tetrisyellow2}
                    alt="contact icon"
                    className="NavIcon"
                  />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </a>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className="drawerButton">
            <img src={dot} alt="icon menu" className="burgerLogo" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
