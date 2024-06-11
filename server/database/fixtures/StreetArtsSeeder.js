const AbstractSeeder = require("./AbstractSeeder");
const UsersSeeder = require("./UsersSeeder");

class StreetArtsSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({
      table: "street_arts",
      truncate: true,
      dependencies: [UsersSeeder],
    });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    // Generate and insert fake data into the 'user' table
    for (let i = 0; i < 15; i += 1) {
      // Generate fake user data
      const fakeStreetArt = {
        users_id: this.getRef(`user_${Math.floor(Math.random() * 10)}`)
          .insertId,
        title: this.faker.music.songName(),
        description: this.faker.person.jobDescriptor(),
        artist: this.faker.person.fullName(),
        latitude: this.faker.location.latitude(),
        longitude: this.faker.location.longitude(),
        is_valid: 1, // Generate a fake email using faker library
        refName: `street_art_${i}`, // Create a reference name for the user
      };

      // Insert the fakeUser data into the 'user' table
      this.insert(fakeStreetArt); // insert into user(email, password) values (?, ?)
    }
  }
}

// Export the UserSeeder class
module.exports = StreetArtsSeeder;
