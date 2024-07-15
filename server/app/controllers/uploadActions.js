const fs = require("fs");
const path = require("path");

// Fonction pour générer un suffixe aléatoire de 5 chiffres
const generateRandomSuffix = () => Math.floor(10000 + Math.random() * 90000);

// Fonction d'upload
const upload = (req, res) => {
  // Vérification de l'extension du fichier
  const allowedExtensions = [".jpg", ".png", ".webp"];
  const fileExtension = path.extname(req.file.originalname).toLowerCase();

  if (!allowedExtensions.includes(fileExtension)) {
    return res
      .status(400)
      .send("Invalid file type. Only .jpg, .png, and .webp are allowed.");
  }

  // Génération du nouveau nom de fichier
  const timestamp = Date.now();
  const randomSuffix = generateRandomSuffix();
  const newFileName = `${timestamp}_${randomSuffix}${fileExtension}`;

  // Chemin complet pour le nouveau fichier
  const newFilePath = path.join("public", "uploadedPicture", newFileName);

  const url = process.env.MAIN_URL || process.env.CLIENT_URL;

  // Renommage et déplacement du fichier
  return fs.rename(req.file.path, newFilePath, (err) => {
    if (err) {
      res.status(400).send("Error while uploading");
    } else {
      res.status(203).json({
        msg: "Upload success",
        url: `${url}/public/uploadedPicture/${newFileName}`,
      });
    }
  });
};

module.exports = {
  upload,
};
