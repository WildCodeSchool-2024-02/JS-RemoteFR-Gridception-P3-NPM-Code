const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  browse,
  read,
  edit,
  add,
  destroy,
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

// Route to edit a new item
router.put("/", edit);

// Route to add a new item
router.post("/", add);

// Route to delete an item
router.delete("/", destroy);

/* ************************************************************************* */

module.exports = router;
