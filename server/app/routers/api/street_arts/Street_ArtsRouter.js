const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  browse,
  read,
  add,
  readByPictures,
  readAllByPictures,
} = require("../../../controllers/streetArtsActions");

// Route to get a list of items
router.get("/", browse);

// Route to get a street arts infos by Picture ID
router.get("/pictures", readAllByPictures);
router.get("/pictures/:id", readByPictures);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
