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
  destroy,
} = require("../../../controllers/usersActions");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to edit a new item
router.put("/:id", edit);

// Route to delete an item
router.delete("/", destroy);
/* ************************************************************************* */

module.exports = router;
