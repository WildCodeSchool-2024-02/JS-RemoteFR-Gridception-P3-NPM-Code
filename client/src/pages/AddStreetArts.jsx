import axios from "axios";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddStreetArts() {
  const { loggedUser } = useOutletContext();

  const [streetArtForm, setStreetArtForm] = useState({
    users_id: loggedUser.id,
    file: "",
    title: "",
    description: "",
    artist: "",
    latitude: "",
    longitude: "",
    address: "",
    main_url: "",
    is_valid: 0,
  });

  const [preview, setPreview] = useState(null);
  const [addressSuggestions, setAddressSuggestions] = useState([]);

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
    } else if (name === "address") {
      setStreetArtForm({ ...streetArtForm, address: value });
      fetchAddressSuggestions(value);
    } else {
      setStreetArtForm({ ...streetArtForm, [name]: value });
    }
  };

  const fetchAddressSuggestions = async (query) => {
    if (query.length > 2) {
      try {
        const response = await axios.get(
          `https://api.locationiq.com/v1/autocomplete?key=pk.573f2b638459d4dec940c23eaf74278f&q=${encodeURIComponent(query)}&limit=5&dedupe=1`
        );
        setAddressSuggestions(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des suggestions d'adresse :",
          error
        );
      }
    } else {
      setAddressSuggestions([]);
    }
  };

  const handleAddressSelect = (suggestion) => {
    setStreetArtForm({
      ...streetArtForm,
      address: suggestion.display_name,
      latitude: suggestion.lat,
      longitude: suggestion.lon,
    });
    setAddressSuggestions([]);
  };

  const notifySuccess = () =>
    toast.success("Street Art reçu, en attente de validation ! Merci !", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyError = (message) =>
    toast.error(
      message ||
        "Il nous manque une information, vérifie que tu as rempli tous les champs",
      {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", streetArtForm.file);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const fileUrl = response.data.url;
      const finalForm = {
        ...streetArtForm,
        file: fileUrl,
      };

      if (
        finalForm.title !== "" &&
        finalForm.description !== "" &&
        finalForm.longitude !== "" &&
        finalForm.latitude !== ""
      ) {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/api/street_arts`,
          finalForm,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        notifySuccess();
        setStreetArtForm({
          users_id: loggedUser.id,
          file: "",
          title: "",
          description: "",
          artist: "",
          latitude: "",
          longitude: "",
          address: "",
          is_valid: 0,
        });
        setPreview(null);
      }
    } catch (err) {
      console.error(err);
      notifyError();
    }
  };

  return (
    <main className="all-content-Add-streetart">
      <section className="add-new-streetart">
        <h2 className="add-title-text">Ajouter une oeuvre:</h2>
        <form className="add-picture-form" onSubmit={handleSubmit}>
          <div className="file-section">
            <label htmlFor="file" className="file-label">
              {preview ? "Changer de photo" : "Ajouter votre photo"}
            </label>
            <input
              type="file"
              id="file"
              name="file"
              accept="image/png, image/jpeg"
              onChange={handleStreetArtChange}
              required
            />
            {preview && (
              <img
                className="added-picture"
                src={preview}
                alt="Prévisualition de l'oeuvre"
              />
            )}
          </div>
          <div className="separator" />
          <div className="label-container">
            <div className="input-row">
              <section>
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
                  className="input-container-title"
                />
              </section>
              <section>
                <label htmlFor="artist">Artiste (si connu)</label>
                <input
                  type="text"
                  id="artist"
                  name="artist"
                  minLength={2}
                  maxLength={100}
                  onChange={handleStreetArtChange}
                  value={streetArtForm.artist}
                  className="input-container-artist"
                />
              </section>
            </div>
            <section>
              <label htmlFor="description">Description</label>
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
            </section>
            <section>
              <label htmlFor="address">Adresse</label>
              <input
                type="text"
                id="address"
                name="address"
                onChange={handleStreetArtChange}
                value={streetArtForm.address}
                required
                className="input-container-artist"
                autoComplete="on"
              />
              {addressSuggestions.length > 0 && (
                <ul className="suggestions-list">
                  {addressSuggestions.map((suggestion) => (
                    <li
                      key={suggestion.place_id}
                      onClick={() => handleAddressSelect(suggestion)}
                      role="button"
                      tabIndex={0}
                      onKeyPress={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          handleAddressSelect(suggestion);
                        }
                      }}
                    >
                      {suggestion.display_name}
                    </li>
                  ))}
                </ul>
              )}
            </section>
            <button type="submit" className="form-submit-btn">
              Envoyer
            </button>
          </div>
        </form>
        <ToastContainer />
      </section>
    </main>
  );
}

export default AddStreetArts;
