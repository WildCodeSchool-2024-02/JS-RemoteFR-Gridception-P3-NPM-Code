const StreetArtsRepository = require("./models/StreetArtsRepository");
const UsersRepository = require("./models/UsersRepository");
const PicturesRepository = require("./models/PicturesRepository");
const StreetArtsCategoriesRepository = require("./models/StreetArtsCategoriesRepository");
const CategoriesRepository = require("./models/CategoriesRepository");
const RolesRepository = require("./models/RolesRepository");
const ContactsRepository = require("./models/ContactsRepository");

const tables = {};

// Register each repository as data access point for its table
tables.streetArts = new StreetArtsRepository();
tables.users = new UsersRepository();
tables.pictures = new PicturesRepository();
tables.streetArtsCategories = new StreetArtsCategoriesRepository();
tables.categories = new CategoriesRepository();
tables.roles = new RolesRepository();
tables.contacts = new ContactsRepository();

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
