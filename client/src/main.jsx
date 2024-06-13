import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/import.scss";
import App from "./App";
import Home from "./pages/Home";
import AddPictures from "./pages/AddPictures";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import LegalNotice from "./pages/LegalNotice";
import Profile from "./pages/Profile";
import Ranking from "./pages/Ranking";
import Register from "./pages/Register";

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
        element: <AddPictures />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/galerie",
        element: <Gallery />,
      },
      {
        path: "/mentions_legales",
        element: <LegalNotice />,
      },
      {
        path: "/profil",
        element: <Profile />,
      },
      {
        path: "/classement",
        element: <Ranking />,
      },
      {
        path: "/inscription",
        element: <Register />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
