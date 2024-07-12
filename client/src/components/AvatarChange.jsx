import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

import Avatar from "react-avatar-edit";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

import Users from "../assets/images/user_profil.png";
import Change from "../assets/images/icon_change_avatar.png";

export default function AvatarChange() {
  const [imageCrop, setImageCrop] = useState(false);

  const [src] = useState(false);
  const [profile, setProfile] = useState(false);
  const [pView, setPView] = useState(null);

  const { loggedUser } = useOutletContext();

  let imgAvatar = Users;

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
    setProfile(pView);
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
        lastname: loggedUser.lastname,
        points: loggedUser.points,
        city: loggedUser.city,
        email: loggedUser.email,
      })
      .then((res) => {
        console.info(res);
      })
      .catch((err) => console.info(err));
  }, [profile, loggedUser]);

  return (
    <section className="AvatarContainer">
      <button type="button" onClick={() => setImageCrop(true)}>
        <img className="change" src={Change} alt="boutton changement avatar" />
        <img className="avatar" src={imgAvatar} alt="avatar" />
      </button>
      <h1 className="user-name">{`${loggedUser.firstname} ${loggedUser.lastname}`}</h1>
      <p className="points">{loggedUser.points}</p>

      <Dialog
        visible={imageCrop}
        onHide={() => setImageCrop(false)}
        className="DialogContainer"
      >
        <div>
          <Avatar
            width={300}
            height={200}
            onCrop={onCrop}
            onClose={onClose}
            src={src}
          />

          <div className="ButtonSaveAvatar">
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
