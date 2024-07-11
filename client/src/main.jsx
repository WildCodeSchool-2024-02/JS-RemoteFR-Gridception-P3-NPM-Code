import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./pages/About";
import App from "./App";
import AddStreetArts from "./pages/AddStreetArts";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Ranking from "./pages/Ranking";
import Register from "./pages/Register";
import StreetArt from "./pages/StreetArt";

import UserPages from "./components/Protection/UserPages";
import AdminPages from "./components/Protection/AdminPages";

import "./styles/import.scss";
import AdminPage from "./pages/AdminPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "galerie",
        element: <Gallery />,
      },
      {
        path: "a_propos",
        element: <About />,
      },
      {
        path: "classement",
        element: <Ranking />,
      },
      {
        path: "inscription",
        element: <Register />,
      },
      {
        path: "streetArt/:id",
        element: <StreetArt />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "utilisateur",
        element: <UserPages />,
        children: [
          {
            path: "add",
            element: <AddStreetArts />,
          },
          {
            path: "profil",
            element: <Profile />,
          },
        ],
      },
      {
        path: "admin",
        element: <AdminPages />,
        children: [
          {
            path: "",
            element: <AdminPage />,
          },
        ],
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
