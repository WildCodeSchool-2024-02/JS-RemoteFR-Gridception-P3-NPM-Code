const express = require("express");

const router = express.Router();
const {
  browse,
  read,
  edit,
  destroy,
  userbyid,
} = require("../../../controllers/usersActions");
const { verifyToken } = require("../../../services/auth");

// Route to get a list of items
router.get("/", browse);
router.get("/", read);
router.put("/:id", edit);

router.get("/me", verifyToken, userbyid);

router.delete("/:id", destroy);

module.exports = router;