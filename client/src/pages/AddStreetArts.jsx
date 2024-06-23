import axios from "axios";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function AddStreetArts() {
  const [streetArtForm, setStreetArtForm] = useState({
    users_id: "9",
    title: "",
    description: "",
    artist: "",
    latitude: "",
    longitude: "",
    is_valid: 1,
  });

  const handleStreetArtChange = (event) => {
    const { name, value } = event.target;
    setStreetArtForm({ ...streetArtForm, [name]: value });
  };

  const notifySucces = () =>
    toast.success("Street Art reçu, en attente de validation ! Merci !", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyError = () =>
    toast.error(
      " Il nous manque une information, vérifie que tu es remplis tous les champs",
      {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );

  return (
    <>
      <section className="gallery-component">
        <form className="add-picture">
          <h2 className="add-text">Ajouter une photo:</h2>
          <section className="add-picture-app">
            <input
              type="file"
              id="picture"
              name="picture"
              onChange={handleStreetArtChange}
              value={streetArtForm.file}
              required
            />
            <img className="new-picture" src="" alt="new" />
          </section>
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            id="title"
            name="title"
            minLength={3}
            maxLength={100}
            onChange={handleStreetArtChange}
            value={streetArtForm.title}
            required
            className="input-container"
          />

          <label htmlFor="description">Description </label>
          <input
            type="text"
            id="description"
            name="description"
            minLength={10}
            maxLength={300}
            onChange={handleStreetArtChange}
            value={streetArtForm.description}
            required
            className="input-container-description"
          />

          <label htmlFor="artist">Artiste (si connu)</label>
          <input
            type="text"
            id="artist"
            name="artist"
            minLength={2}
            maxLength={100}
            onChange={handleStreetArtChange}
            value={streetArtForm.artist}
            className="input-container"
          />

          <label htmlFor="longitude">Longitude</label>
          <input
            type="text"
            id="longitude"
            name="longitude"
            onChange={handleStreetArtChange}
            value={streetArtForm.longitude}
            required
            className="input-container"
          />

          <label htmlFor="latitude">Latitude</label>
          <input
            type="text"
            id="latitude"
            name="latitude"
            onChange={handleStreetArtChange}
            value={streetArtForm.latitude}
            required
            className="input-container"
          />
          <button
            type="submit"
            className="form-submit-btn"
            onClick={(e) => {
              e.preventDefault();
              if (
                streetArtForm.title !== "" &&
                streetArtForm.description !== "" &&
                streetArtForm.longitude !== "" &&
                streetArtForm.latitude !== ""
              ) {
                axios
                  .post(
                    `${import.meta.env.VITE_API_URL}/api/street_arts`,
                    streetArtForm
                  )
                  .then((res) => {
                    notifySucces();
                    setStreetArtForm({
                      users_id: "9",
                      title: "",
                      description: "",
                      artist: "",
                      latitude: "",
                      longitude: "",
                      is_valid: 1,
                    });
                    console.info(res);
                  })
                  .catch((err) => {
                    console.info(err);
                  });
              } else if (
                streetArtForm.file === "" ||
                streetArtForm.title === "" ||
                streetArtForm.description === "" ||
                streetArtForm.longitude === "" ||
                streetArtForm.latitude === ""
              ) {
                notifyError();
              }
            }}
          >
            Envoyer
          </button>
        </form>
      </section>
      <ToastContainer />
    </>
  );
}

export default AddStreetArts;
