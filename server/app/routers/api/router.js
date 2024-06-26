const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const catagoriesRouter = require("./categories/CategoriesRouter");

router.use("/categories", catagoriesRouter);

const contactsRouter = require("./contacts/ContactsRouter");

router.use("/contacts", contactsRouter);

const streetArtsRouter = require("./street_arts/Street_ArtsRouter");

router.use("/street_arts", streetArtsRouter);

const usersRouter = require("./users/UsersRouter");

router.use("/users", usersRouter);

const picturesRouter = require("./pictures/PicturesRouter");

router.use("/pictures", picturesRouter);

const rolesRouter = require("./roles/RolesRouter");

router.use("/roles", rolesRouter);

const uploadRouter = require("./upload/UploadRouter")

router.use("/upload", uploadRouter);
/* ************************************************************************* */

module.exports = router;
