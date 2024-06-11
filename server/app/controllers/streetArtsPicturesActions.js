// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all streetArtsPictures from the database
    const streetArtsPictures = await tables.streetArtsPicture.readAll();

    // Respond with the streetArtsPictures in JSON format
    res.json(streetArtsPictures);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific streetArtsPicture from the database based on the provided ID
    const streetArtsPicture = await tables.streetArtsPicture.read(
      req.params.id
    );

    // If the streetArtsPicture is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the streetArtsPicture in JSON format
    if (streetArtsPicture == null) {
      res.sendStatus(404);
    } else {
      res.json(streetArtsPicture);
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
  // Extract the streetArtsPicture data from the request body
  const streetArtsPicture = req.body;

  try {
    // Insert the streetArtsPicture into the database
    const insertId = await tables.streetArtsPicture.create(streetArtsPicture);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted streetArtsPicture
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
