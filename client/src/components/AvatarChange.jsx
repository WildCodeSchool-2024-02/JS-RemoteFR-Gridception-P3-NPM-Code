import { useState, useEffect } from "react";
import axios from "axios";

import Avatar from "react-avatar-edit";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

import Change from "../assets/images/icon_change_avatar.png";
import Users from "../assets/images/user_profil.png";

import "../styles/AvatarChange.scss";

export default function AvatarChange() {
  const [imageCrop, setImageCrop] = useState(false);
  const [profile, setProfile] = useState({ avatar: "" });
  const [pView, setPView] = useState(null);
  const [src] = useState(false);

  const onClose = () => {
    setPView(null);
  };
  const onCrop = (imageCropped) => {
    setPView(imageCropped);
  };

  const saveCropImage = () => {
    setProfile({ avatar: pView });
    setImageCrop(false);
    console.info(profile);
  };

  useEffect(() => {
    if (!profile.avatar) {
      return;
    }

    axios
      .put(`${import.meta.env.VITE_API_URL}/api/users/10`, {
        ...profile,
        roles_id: "2",
        firstname: "Marlen",
        lastname: "Brekke",
        points: "3",
        city: "Port Travonside",
        email: "Alize_Schmeler23@gmail.com",
        password: "xn2vRa7iKk_xhtX",
      })
      .then((res) => {
        console.info(res);
      })
      .catch((err) => console.info(err));
  }, [profile]);

  return (
    <section className="avatar-container">
      <button type="button" onClick={() => setImageCrop(true)}>
        <img className="change" src={Change} alt="boutton changement avatar" />
        <img
          className="avatar"
          src={profile.avatar === "" ? Users : profile.avatar}
          alt="avatar"
        />
      </button>
      <h1 className="user-name">Anthony GORSKI</h1>

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
