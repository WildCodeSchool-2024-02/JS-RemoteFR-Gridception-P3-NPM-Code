const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  browse,
  browseByPictures,
  read,
  readByPictures,
  readById,
  edit,
  editValidation,
  add,
  destroy,
} = require("../../../controllers/streetArtsActions");

// Route to get a list of items
router.get("/", browse);
router.get("/pictures", browseByPictures);

// Route to get a street arts infos by Picture ID
router.get("/pictures/:id", readByPictures);

// Route to get a street arts infos by User ID
router.get("/users/:id", readById);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to edit a new item
router.put("/:id", edit);
router.put("/validate/:id", editValidation)

// Route to add a new item
router.post("/", add);

// Route to delete an item
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;