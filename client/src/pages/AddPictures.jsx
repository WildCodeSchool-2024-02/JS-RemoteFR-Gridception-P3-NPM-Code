import { useState } from "react";

function AddPictures() {
  const [file, setFile] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [artist, setArtist] = useState();
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  const isValid = 1;

  const handlePictureChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleArtistChange = (e) => {
    setArtist(e.target.value);
  };
  const handleLongitudeChange = (e) => {
    setLongitude(e.target.value);
  };
  const handleLatitudeChange = (e) => {
    setLatitude(e.target.value);
  };

  return (
    <section>
      <h2>Add Image:</h2>
      <form className="add-picture">
        <input type="file" onChange={handlePictureChange} />
        <img className="new-picture" src={file} alt="new" />

        <label htmlFor="title">Title</label>
        <input type="text" id="title" onChange={handleTitleChange} required />

        <label htmlFor="description">Description </label>
        <input
          type="text"
          id="description"
          onChange={handleDescriptionChange}
          required
        />

        <label htmlFor="artist">Artiste</label>
        <input type="text" id="artist" onChange={handleArtistChange} />

        <label htmlFor="longitude">Longitude</label>
        <input
          type="text"
          id="longitude"
          onChange={handleLongitudeChange}
          required
        />

        <label htmlFor="latitude">Latitude</label>
        <input
          type="text"
          id="latitude"
          onChange={handleLatitudeChange}
          required
        />

        <button
          type="button"
          onClick={() => {
            console.info({
              file,
              title,
              description,
              artist,
              coords: [latitude, longitude],
              isValid,
            });
          }}
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default AddPictures;
