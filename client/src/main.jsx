import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./pages/About";
import App from "./App";
import AddPictures from "./pages/AddPictures";
import AddStreetArts from "./pages/AddStreetArts";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Ranking from "./pages/Ranking";
import Register from "./pages/Register";
import StreetArt from "./pages/StreetArt";

import "./styles/import.scss";

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
