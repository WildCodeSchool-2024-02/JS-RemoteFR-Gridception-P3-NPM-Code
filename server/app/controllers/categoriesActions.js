// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all catagories from the database
    const catagories = await tables.categories.readAll();

    // Respond with the catagories in JSON format
    res.json(catagories);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific catagory from the database based on the provided ID
    const catagory = await tables.categories.read(req.params.id);

    // If the catagory is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the catagory in JSON format
    if (catagory == null) {
      res.sendStatus(404);
    } else {
      res.json(catagory);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the categories data from the request body and params
  const categories = { ...req.body, id: req.params.id };

  try {
    // Update the categories in the database
    await tables.categories.update(categories);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the catagory data from the request body
  const catagory = req.body;
  try {
    // Insert the catagory into the database
    const insertId = await tables.categories.create(catagory);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted catagory
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    // Delete the categories from the database
    await tables.categories.delete(req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
