const AbstractSeeder = require("./AbstractSeeder");
const RolesSeeder = require("./RolesSeeder");

class UsersSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "users", truncate: true, dependencies: [RolesSeeder] });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    // Generate and insert fake data into the 'user' table
    for (let i = 0; i < 10; i += 1) {
      // Generate fake user data
      const fakeUser = {
        roles_id: this.getRef(`role_${Math.floor(Math.random() * 2)}`).insertId, // Generate a fake email using faker library
        firstname: this.faker.person.firstName(),
        lastname: this.faker.person.lastName(),
        avatar: this.faker.image.avatar(),
        points: this.faker.number.bigInt({ max: 100n }),
        city: this.faker.location.city(),
        email: this.faker.internet.email(),
        password: this.faker.internet.password(),
        // Generate a fake password using faker library
        refName: `user_${i}`, // Create a reference name for the user
      };

      // Insert the fakeUser data into the 'user' table
      this.insert(fakeUser); // insert into user(email, password) values (?, ?)
    }
  }
}

// Export the UserSeeder class
module.exports = UsersSeeder;
