const AbstractSeeder = require("./AbstractSeeder");

class ContactsSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({
      table: "contacts",
      truncate: true,
    });
  }

  // The run method - Populate the 'user' table with fake data
  run() {
    // Generate and insert fake data into the 'user' table
    for (let i = 0; i < 55; i += 1) {
      // Generate fake user data
      const fakeContact = {
        fullname: this.faker.person.fullName(),
        mail: this.faker.internet.email(),
        message: this.faker.person.jobDescriptor(), // Create a reference name for the user
      };

      // Insert the fakeUser data into the 'user' table
      this.insert(fakeContact); // insert into user(email, password) values (?, ?)
    }
  }
}

// Export the UserSeeder class
module.exports = ContactsSeeder;
