import { useState } from "react";
import Avatar from "react-avatar-edit";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

import Users from "../assets/images/user_profil.png";

import "../styles/AvatarChange.scss";

export default function AvatarChange() {
  const [imageCrop, setImageCrop] = useState(false);

  const [src] = useState(false);
  const [profile, setProfile] = useState([]);
  const [pView, setPView] = useState(false);

  const profileFinal = profile.map((item) => item.pView);

  const onClose = () => {
    setPView(null);
  };
  const onCrop = (view) => {
    setPView(view);
  };
  const saveCropImage = () => {
    setProfile([...profile, { pView }]);
    setImageCrop(false);
  };

  return (
    <section className="AvatarContainer">
      <button type="button" onClick={() => setImageCrop(true)}>
        <img src={profileFinal.length ? profileFinal : Users} alt="avatar" />
      </button>
      <h1 className="UserName">Anthony GORSKI</h1>

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
