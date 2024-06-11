const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const localisations = await tables.localisations.readAll();

    res.json(localisations);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    const localisations = await tables.localisations.read(req.params.id);

    if (localisations == null) {
      res.sendStatus(404);
    } else {
      res.json(localisations);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const localisations = req.body;

  try {
    const insertId = await tables.localisations.create(localisations);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
