import * as React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import dot from "../assets/images/dot_icon.png";
import logo from "../assets/images/logo.png";
import tetrispurple from "../assets/images/tetrispurple.png";
import tetrispurple2 from "../assets/images/tetrispurple2.png";
import tetrisyellow2 from "../assets/images/tetrisyellow2.png";
import LogoutIcon from "../assets/images/logout.png";

// thème personnalisé pour la font Fugaz One
const theme = createTheme({
  typography: {
    fontFamily: "Chakra Petch, sans-serif",
  },
});

export default function AnchorTemporaryDrawer({ loggedUser, handleLogout }) {
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
        zIndex: 1200,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="drawer-log-title">
        <h1 className="drawer-title">Street Art</h1>
        <img src={logo} alt="logo du site " className="logo-in-drawer" />
        <h2 className="drawer-title-2">Hunter</h2>
      </div>
      <List>
        <Link to="/galerie">
          {["Galerie"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img
                    src={tetrispurple}
                    alt="galerie icon"
                    className="drawer-icon"
                  />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </Link>
      </List>

      <Divider />
      <List>
        <Link to="/a_propos">
          {["A propos"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img
                    src={tetrisyellow2}
                    alt="a propos icon"
                    className="drawer-icon"
                  />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/contact">
          {["Contact"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img
                    src={tetrispurple2}
                    alt="contact icon"
                    className="drawer-icon"
                  />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </Link>
      </List>
      {loggedUser?.id !== undefined && (
        <>
          <Divider />
          <List>
            {["Se déconnecter"].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={handleLogout}>
                  <ListItemIcon>
                    <img
                      src={LogoutIcon}
                      alt="logout icon"
                      className="drawer-icon"
                    />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="drawer-button-container">
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              onClick={toggleDrawer(anchor, true)}
              className="drawer-button"
            >
              <img src={dot} alt="icon menu" className="burger-logo" />
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
    </ThemeProvider>
  );
}

AnchorTemporaryDrawer.propTypes = {
  loggedUser: PropTypes.shape({
    id: PropTypes.number,
    roles_id: PropTypes.number,
  }).isRequired,
  handleLogout: PropTypes.func.isRequired,
};
