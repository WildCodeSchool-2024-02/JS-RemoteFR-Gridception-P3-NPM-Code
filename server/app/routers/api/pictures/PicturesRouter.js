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
  readByUserId,
} = require("../../../controllers/picturesActions");

// Route to get a list of items
router.get("/", browse);

router.get("/", read);
// Route to get a specific item by ID

router.get("/street_arts/users/:id", readByUserId);

// Route to add a new item
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
