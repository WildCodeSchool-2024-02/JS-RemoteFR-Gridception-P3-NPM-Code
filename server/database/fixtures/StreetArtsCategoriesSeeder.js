const AbstractSeeder = require("./AbstractSeeder");
const CategoriesSeeder = require("./CategoriesSeeder");
const StreetArtsSeeder = require("./StreetArtsSeeder");

class StreetArtsCategoriesSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({
      table: "street_arts_categories",
      truncate: true,
      dependencies: [CategoriesSeeder, StreetArtsSeeder],
    });
  }

  run() {
    // Generate and insert fake data into the 'user' table
    for (let i = 0; i < 3; i += 1) {
      // Generate fake user data
      const fakeStreetArtCategory = {
        categories_id: this.getRef(`category_${Math.floor(Math.random() * 3)}`)
          .insertId,
        street_arts_id: this.getRef(
          `street_art_${Math.floor(Math.random() * 3)}`
        ).insertId, // Generate a fake email using faker library
        // Generate a fake password using faker library
        refName: `street_art_category_${i}`, // Create a reference name for the user
      };

      //       // Insert the fakeUser data into the 'user' table
      this.insert(fakeStreetArtCategory); // insert into user(email, password) values (?, ?)
    }
  }
}

// Export the UserSeeder class
module.exports = StreetArtsCategoriesSeeder;
