const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const pictures = await tables.pictures.readAll();

    // Respond with the items in JSON format
    res.json(pictures);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const browseByUserId = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const pictures = await tables.pictures.readByUserId(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (pictures == null) {
      res.sendStatus(404);
    } else {
      res.json(pictures);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const pictures = await tables.pictures.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (pictures == null) {
      res.sendStatus(404);
    } else {
      res.json(pictures);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the pictures data from the request body and params
  const pictures = { ...req.body, id: req.params.id };

  try {
    // Update the pictures in the database
    await tables.pictures.update(pictures);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const pictures = req.body;
  try {
    // Insert the item into the database
    const insertId = await tables.pictures.create(pictures);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    // Delete the pictures from the database
    await tables.pictures.delete(req.params.id);

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
  browseByUserId,
  read,
  edit,
  add,
  destroy,
};
