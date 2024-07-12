const express = require("express");
const multer = require("multer");

const uploadPicture = multer({ dest: "public/uploadedPicture/" });

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { upload } = require("../../../controllers/uploadActions");

// Route to upload an item
router.post("/", uploadPicture.single("file"), upload);

/* ************************************************************************* */

module.exports = router;
