const AbstractSeeder = require("./AbstractSeeder");
const StreetArtsSeeder = require("./StreetArtsSeeder");

class PicturesSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({
      table: "pictures",
      truncate: true,
      dependencies: [StreetArtsSeeder],
    });
  }

  // The run method - Populate the 'user' table with fake data
  run() {
    // Generate and insert fake data into the 'user' table
    for (let i = 0; i < 15; i += 1) {
      // Generate fake user data
      const fakePicture = {
        street_arts_id: this.getRef(
          `street_art_${Math.floor(Math.random() * 10)}`
        ).insertId,
        name: this.faker.music.songName(),
        url: this.faker.image.urlPicsumPhotos(),
        date: this.faker.date.anytime(),
        is_valid: 1, // Generate a fake email using faker library
        refName: `picture_${i}`, // Create a reference name for the user
      };

      // Insert the fakeUser data into the 'user' table
      this.insert(fakePicture); // insert into user(email, password) values (?, ?)
    }
  }
}

// Export the UserSeeder class
module.exports = PicturesSeeder;
