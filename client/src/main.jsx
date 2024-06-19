import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/import.scss";
import App from "./App";
import Home from "./pages/Home";
import AddStreetArts from "./pages/AddStreetArts";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Ranking from "./pages/Ranking";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import StreetArt from "./pages/StreetArt";
import AddPictures from "./pages/AddPictures";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <AddStreetArts />,
      },
      {
        path: "/addpictures",
        element: <AddPictures />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Galerie",
        element: <Gallery />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Profil",
        element: <Profile />,
      },
      {
        path: "/Classement",
        element: <Ranking />,
      },
      {
        path: "/Inscription",
        element: <Register />,
      },
      {
        path: "/streetArt",
        element: <StreetArt />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
