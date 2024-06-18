import { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Gallery() {
  const [pictures, setPictures] = useState([]);
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    fetch("http://127.0.0.1:3310/api/pictures")
      .then((response) => response.json())
      .then((data) => setPictures(data))
      .catch((error) => console.error("Error fetching pictures:", error));
  }, []);

  const getCols = () => {
    if (matchesLg) return 4;
    if (matchesMd) return 3;
    if (matchesSm) return 2;
    return 1;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        width: "100%",
        height: "100vh",
        padding: theme.spacing(2),
      }}
    >
      <ImageList
        sx={{
          width: "100%",
          height: "100%",
          overflowY: "auto", // pour scroll en vertical
          transform: "translateZ(0)",
        }}
        rowHeight={200}
        cols={getCols()}
        gap={10}
      >
        {pictures.length > 0 ? (
          pictures.map((picture) => (
            <ImageListItem key={picture.id} cols={1} rows={1}>
              <img
                srcSet={`${picture.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${picture.url}?w=248&fit=crop&auto=format`}
                alt={picture.name}
                loading="lazy"
              />
              <ImageListItemBar
                title={picture.name}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${picture.name}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))
        ) : (
          <p>Pas de photos disponibles</p>
        )}
      </ImageList>
    </Box>
  );
}
