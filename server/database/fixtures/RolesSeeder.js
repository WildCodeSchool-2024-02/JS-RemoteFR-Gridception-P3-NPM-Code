const AbstractSeeder = require("./AbstractSeeder");

class RolesSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "roles", truncate: true });
    this.roles = ["administrateur", "utilisateur"];
  }

  run() {
    for (let i = 0; i < 2; i += 1) {
      const fakeRole = {
        name: this.roles[i],
        refName: `role_${i}`,
      };

      this.insert(fakeRole); // insert into user(email, password) values (?, ?)
    }
  }
}

module.exports = RolesSeeder;