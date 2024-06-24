import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddStreetArts() {
  const [streetArtForm, setStreetArtForm] = useState({
    users_id: "9",
    main_picture: null,
    title: "",
    description: "",
    artist: "",
    latitude: "",
    longitude: "",
    is_valid: 1,
  });

  const [preview, setPreview] = useState(null);

  const handleStreetArtChange = (event) => {
    const { name, value, files } = event.target;
    if (name === "file") {
      const file = files[0];
      setStreetArtForm({ ...streetArtForm, file });

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setPreview(null);
      }
    } else {
      setStreetArtForm({ ...streetArtForm, [name]: value });
    }
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
      <section className="GalleryComponent">
        <form className="add-picture">
          <h2 className="Add-text">Ajouter une oeuvre:</h2>
          <div className="file-section">
            <label htmlFor="file" className="file-label">
              Ajouter votre photo
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleStreetArtChange}
              required
            />
          </div>
          {preview && (
            <img
              className="new-picture"
              src={preview}
              alt="Prévisualition de l'oeuvre"
            />
          )}
          <section className="add-picture-fields">
            <div className="input-fields">
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
                          main_picture: "",
                          title: "",
                          description: "",
                          artist: "",
                          latitude: "",
                          longitude: "",
                          is_valid: 1,
                          file: null,
                        });
                        setPreview(null);
                        console.info(res);
                      })
                      .catch((err) => {
                        console.info(err);
                      });
                  } else {
                    notifyError();
                  }
                }}
              >
                Envoyer
              </button>
            </div>
          </section>
        </form>
      </section>
      <ToastContainer />
    </>
  );
}

export default AddStreetArts;
