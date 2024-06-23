import { useState } from "react";

import Avatar from "react-avatar-edit";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

import Change from "../assets/images/icon_change_avatar.png";
import Users from "../assets/images/user_profil.png";

import "../styles/AvatarChange.scss";

export default function AvatarChange() {
  const [imageCrop, setImageCrop] = useState(false);

  const [src] = useState(false);
  const [profile, setProfile] = useState(false);
  const [pView, setPView] = useState(false);

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

  return (
    <section className="avatar-container">
      <button type="button" onClick={() => setImageCrop(true)}>
        <img className="change" src={Change} alt="boutton changement avatar" />
        <img src={profile === false ? Users : profile} alt="avatar" />
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
