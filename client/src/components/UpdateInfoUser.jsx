import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

import { ToastContainer, toast } from "react-toastify";

import Logo from "../assets/images/logo.png";

function UpdateInfoUser({ dialogRef }) {
  const { loggedUser } = useOutletContext();

  const [informations, setInformations] = useState({
    firstname: "",
    lastname: "",
    city: "",
    email: "",
  });

  const handleInformationsChange = (event) => {
    const { name, value } = event.target;
    setInformations({ ...informations, [name]: value });
  };

  const handleInformations = async () => {
    if (
      !informations.firstname &&
      !informations.lastname &&
      !informations.email &&
      !informations.city
    ) {
      return;
    }
    try {
      axios
        .put(`${import.meta.env.VITE_API_URL}/api/users/${loggedUser?.id}`, {
          roles_id: loggedUser.roles_id,
          firstname: informations.firstname || loggedUser.firstname,
          lastname: informations.lastname || loggedUser.lastname,
          points: loggedUser.points,
          city: informations.city || loggedUser.city,
          email: informations.email || loggedUser.email,
          avatar: loggedUser.avatar,
        })
        .then(() => {
          setInformations({
            firstname: "",
            lastname: "",
            city: "",
            email: "",
          });
        });
    } catch (error) {
      console.error(error);
      toast.error("Une erreur s'est produite. Veuillez réessayer.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <dialog className="popup-informations" ref={dialogRef}>
      <div className="change-information-container">
        <CloseIcon
          onClick={() => {
            dialogRef.current?.close();
          }}
        />
        <img
          src={Logo}
          alt="Street art hunter"
          className="logo-information-desktop"
        />
        <form onSubmit={handleInformations} className="logo-information-group">
          <label htmlFor="firstname">Prénom</label>
          <input
            name="firstname"
            id="firstname"
            type="firstname"
            onChange={handleInformationsChange}
          />
          <label htmlFor="lastname">Nom</label>
          <input
            name="lastname"
            id="lastname"
            type="lastname"
            onChange={handleInformationsChange}
          />

          <label htmlFor="email">E-mail</label>
          <input
            name="email"
            id="email"
            type="email"
            onChange={handleInformationsChange}
          />
          <label htmlFor="city">Ville</label>
          <input
            name="city"
            id="city"
            type="city"
            onChange={handleInformationsChange}
          />
          <button type="submit" className="button-profil">
            Valider
          </button>
        </form>
      </div>
      <ToastContainer />
    </dialog>
  );
}

UpdateInfoUser.propTypes = {
  dialogRef: PropTypes.objectOf(PropTypes.string).isRequired,
  current: PropTypes.element.isRequired,
};

export default UpdateInfoUser;
