const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  browse,
  browseByUserId,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/picturesActions");

// Route to get a list of items
router.get("/", browse);
router.get("/street_arts/users/:id", browseByUserId);

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
