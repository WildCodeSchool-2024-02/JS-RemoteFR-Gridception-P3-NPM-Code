const AbstractSeeder = require("./AbstractSeeder");
const RolesSeeder = require("./RolesSeeder");

class UsersSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "users", truncate: true, dependencies: [RolesSeeder] });
  }

  run() {
    for (let i = 0; i < 1; i += 1) {
      const fakeAdmin = {
        roles_id: 1,
        firstname: "Toto",
        lastname: "Tata",
        avatar: this.faker.image.avatar(),
        points: 0,
        city: this.faker.location.city(),
        email: "toto@toto.com",
        password:
          "$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4",
        refName: `admin_${i}`,
      };

      const fakeUser = {
        roles_id: 2,
        firstname: "John",
        lastname: "Doe",
        avatar: this.faker.image.avatar(),
        points: 0,
        city: this.faker.location.city(),
        email: "john@doe.com",
        password:
          "$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4",
        refName: `user_${i}`,
      };

      this.insert(fakeAdmin);
      this.insert(fakeUser);
    }
  }
}

// Export the UserSeeder class
module.exports = UsersSeeder;
