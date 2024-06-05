// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all streetArtsUsers from the database
    const streetArtsUsers = await tables.streetArtsUser.readAll();

    // Respond with the streetArtsUsers in JSON format
    res.json(streetArtsUsers);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific streetArtsUser from the database based on the provided ID
    const streetArtsUser = await tables.streetArtsUser.read(req.params.id);

    // If the streetArtsUser is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the streetArtsUser in JSON format
    if (streetArtsUser == null) {
      res.sendStatus(404);
    } else {
      res.json(streetArtsUser);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the streetArtsUser data from the request body
  const streetArtsUser = req.body;

  try {
    // Insert the streetArtsUser into the database
    const insertId = await tables.streetArtsUser.create(streetArtsUser);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted streetArtsUser
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
