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
router.get("/:id", read);

// Route to get a list of users posted pictures
router.get("/streetarts/users/:id", readByUserId);

// Route to add a new item
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
