const AbstractSeeder = require("./AbstractSeeder");

class CategoriesSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "categories", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    // Generate and insert fake data into the 'user' table
    for (let i = 0; i < 10; i += 1) {
      // Generate fake user data
      const fakeCategory = {
        name: this.faker.music.genre(), // Generate a fake email using faker library
        refName: `category_${i}`, // Create a reference name for the user
      };

      //       // Insert the fakeUser data into the 'user' table
      this.insert(fakeCategory); // insert into user(email, password) values (?, ?)
    }
  }
}

// Export the UserSeeder class
module.exports = CategoriesSeeder;
