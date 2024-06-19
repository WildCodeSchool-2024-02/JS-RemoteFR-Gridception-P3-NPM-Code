// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all streetArtsCategories from the database
    const streetArtsCategories = await tables.streetArtsCategories.readAll();

    // Respond with the streetArtsCategories in JSON format
    res.json(streetArtsCategories);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific streetArtsCategory from the database based on the provided ID
    const streetArtsCategory = await tables.streetArtsCategories.read(
      req.params.id
    );

    // If the streetArtsCategory is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the streetArtsCategory in JSON format
    if (streetArtsCategory == null) {
      res.sendStatus(404);
    } else {
      res.json(streetArtsCategory);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the streetArtsCategories data from the request body and params
  const streetArtsCategories = { ...req.body, id: req.params.id };

  try {
    // Update the streetArtsCategories in the database
    await tables.streetArtsCategories.update(streetArtsCategories);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the streetArtsCategory data from the request body
  const streetArtsCategory = req.body;

  try {
    // Insert the streetArtsCategory into the database
    const insertId =
      await tables.streetArtsCategories.create(streetArtsCategory);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted streetArtsCategory
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    // Delete the streetArtsCategories from the database
    await tables.streetArtsCategories.delete(req.params.id);

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
  read,
  edit,
  add,
  destroy,
};
