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

      const fakeUser1 = {
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

      const fakeUser2 = {
        roles_id: 2,
        firstname: "Alice",
        lastname: "Smith",
        avatar: this.faker.image.avatar(),
        points: 0,
        city: this.faker.location.city(),
        email: "alice.smith@example.com",
        password:
          "$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4",
        refName: `user_1`,
      };

      const fakeUser3 = {
        roles_id: 2,
        firstname: "Bob",
        lastname: "Johnson",
        avatar: this.faker.image.avatar(),
        points: 0,
        city: this.faker.location.city(),
        email: "bob.johnson@example.com",
        password:
          "$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4",
        refName: `user_2`,
      };

      const fakeUser4 = {
        roles_id: 2,
        firstname: "Charlie",
        lastname: "Brown",
        avatar: this.faker.image.avatar(),
        points: 0,
        city: this.faker.location.city(),
        email: "charlie.brown@example.com",
        password:
          "$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4",
        refName: `user_3`,
      };

      const fakeUser5 = {
        roles_id: 2,
        firstname: "David",
        lastname: "Williams",
        avatar: this.faker.image.avatar(),
        points: 0,
        city: this.faker.location.city(),
        email: "david.williams@example.com",
        password:
          "$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4",
        refName: `user_4`,
      };

      const fakeUser6 = {
        roles_id: 2,
        firstname: "Emma",
        lastname: "Jones",
        avatar: this.faker.image.avatar(),
        points: 0,
        city: this.faker.location.city(),
        email: "emma.jones@example.com",
        password:
          "$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4",
        refName: `user_5`,
      };

      this.insert(fakeAdmin);
      this.insert(fakeUser1);
      this.insert(fakeUser2);
      this.insert(fakeUser3);
      this.insert(fakeUser4);
      this.insert(fakeUser5);
      this.insert(fakeUser6);
    }
  }
}

// Export the UserSeeder class
module.exports = UsersSeeder;
