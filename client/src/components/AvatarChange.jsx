import { useState, useEffect } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

import Avatar from "react-avatar-edit";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

import Change from "../assets/images/icon_change_avatar.png";

export default function AvatarChange() {
  const [imageCrop, setImageCrop] = useState(false);
  const [profile, setProfile] = useState({ avatar: "" });
  const [pView, setPView] = useState(null);
  const [src] = useState(false);

  const { loggedUser } = useOutletContext();

  let imgAvatar = loggedUser.avatar;

  if (profile?.avatar) {
    imgAvatar = profile.avatar;
  } else if (loggedUser.avatar) {
    imgAvatar = loggedUser.avatar;
  }


  const onClose = () => {
    setPView(null);
  };
  const onCrop = (imageCropped) => {
    setPView(imageCropped);
  };

  const saveCropImage = () => {
    setProfile({ avatar: pView });
    setImageCrop(false);
  };

  useEffect(() => {
    if (!profile.avatar) {
      return;
    }

    axios
      .put(`${import.meta.env.VITE_API_URL}/api/users/${loggedUser?.id}`, {
        ...profile,
        roles_id: loggedUser.roles_id,
        firstname: loggedUser.firstname,
        pseudo: loggedUser.pseudo,
        lastname: loggedUser.lastname,
        points: loggedUser.points,
        city: loggedUser.city,
        email: loggedUser.email,
      })
      .then((res) => {
        console.info(`Reponse du Put: ${res}`);
      })
      .catch((err) => console.info(err));
  }, [profile, loggedUser]);

  return (
    <section className="avatar-container">
      <button
        className="button-avatar"
        type="button"
        onClick={() => setImageCrop(true)}
      >
        <img className="avatar" src={imgAvatar} alt="avatar" />
        <img className="change" src={Change} alt="boutton changement avatar" />
      </button>
      <h1 className="user-name">{`${loggedUser.firstname} ${loggedUser.lastname}`}</h1>
      <p className="points">{loggedUser.points} Points</p>

      <Dialog
        visible={imageCrop}
        onHide={() => setImageCrop(false)}
        className="dialog-container"
      >
        <div>
          <Avatar
            width={300}
            height={200}
            onCrop={onCrop}
            onClose={onClose}
            scale={1.2}
            src={src}
          />

          <div className="button-save-avatar">
            <Button
              onClick={saveCropImage}
              label="Sauvegarde"
              icon="pi pi-check"
            />
          </div>
        </div>
      </Dialog>

      <InputText style={{ display: "none" }} type="file" accept="image/*" />
    </section>
  );
}
