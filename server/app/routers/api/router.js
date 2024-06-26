const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const catagoriesRouter = require("./categories/CategoriesRouter");
const contactsRouter = require("./contacts/ContactsRouter");
const streetArtsRouter = require("./street_arts/Street_ArtsRouter");
const usersRouter = require("./users/UsersRouter");
const picturesRouter = require("./pictures/PicturesRouter");
const rolesRouter = require("./roles/RolesRouter");

router.use("/contacts", contactsRouter);
router.use("/categories", catagoriesRouter);
router.use("/street_arts", streetArtsRouter);
router.use("/users", usersRouter);
router.use("/pictures", picturesRouter);
router.use("/roles", rolesRouter);

/* ************************************************************************* */
const streetArtsActions = require("../../controllers/streetArtsActions");
const picturesActions = require("../../controllers/picturesActions");

// Import userActions module for handling user-related operations
const authActions = require("../../controllers/authAction");
const userActions = require("../../controllers/usersActions");

const { hashPassword, verifyToken } = require("../../services/auth");

router.get("/users", userActions.browse);
router.get("/users/:id", userActions.read);
router.post("/users", hashPassword, userActions.add);

// Import authActions module for handling auth-related operations

router.post("/login", authActions.login);

// Authentication wall
router.use(verifyToken);

// This route is protected
router.post("/street_arts", streetArtsActions.add);
router.post("/pictures", picturesActions.add);

/* ************************************************************************* */

module.exports = router;
