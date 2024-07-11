// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all streetArts from the database
    const streetArts = await tables.streetArts.readAll();

    // Respond with the streetArts in JSON format
    res.json(streetArts);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific streetArt from the database based on the provided ID
    const streetArt = await tables.streetArts.read(req.params.id);

    // If the streetArt is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the streetArt in JSON format
    if (streetArt == null) {
      res.sendStatus(404);
    } else {
      res.json(streetArt);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const browseByPictures = async (req, res, next) => {
  try {
    // Fetch a specific streetArt from the database based on the provided ID
    const streetArt = await tables.streetArts.browseByPictures(req.params.id);

    // If the streetArt is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the streetArt in JSON format
    if (streetArt == null) {
      res.sendStatus(404);
    } else {
      res.json(streetArt);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readByPictures = async (req, res, next) => {
  try {
    // Fetch a specific streetArt from the database based on the provided ID
    const streetArt = await tables.streetArts.readByPicture(req.params.id);

    // If the streetArt is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the streetArt in JSON format
    if (streetArt == null) {
      res.sendStatus(404);
    } else {
      res.json(streetArt);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readById = async (req, res, next) => {
  try {
    // Fetch a specific streetArt from the database based on the provided ID
    const streetArt = await tables.streetArts.readById(req.params.id);

    // If the streetArt is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the streetArt in JSON format
    if (streetArt == null) {
      res.sendStatus(404);
    } else {
      res.json(streetArt);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation

const edit = async (req, res, next) => {
  // Extract the category data from the request body and params
  const streetArt = { ...req.body, id: req.params.id };

  try {
    // Update the category in the database
    await tables.streetArts.update(streetArt);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const editValidation = async (req, res, next) => {
  const streetArt = { ...req.body, id: req.params.id };

  try {
    const result = await tables.streetArts.updateValidation(streetArt);

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the streetArt data from the request body

  try {
    const streetArt = req.body;
    // Insert the streetArt into the database
    const insertId = await tables.streetArts.create(streetArt);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted streetArt
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation

const destroy = async (req, res, next) => {
  try {
    // Delete the category from the database
    await tables.streetArts.delete(req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  browseByPictures,
  read,
  readByPictures,
  readById,
  edit,

  editValidation,
  add,
  destroy,
};
