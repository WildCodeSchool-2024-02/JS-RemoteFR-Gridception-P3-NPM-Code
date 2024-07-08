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
import AdminPage from "./pages/AdminPage";

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
        path: "/admin",
        element: <AdminPage />
      },
      {
        path: "/addpictures",
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
        path: "/a_propos",
        element: <About />,
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
