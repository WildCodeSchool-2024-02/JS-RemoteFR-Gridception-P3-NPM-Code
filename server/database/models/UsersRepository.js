const AbstractRepository = require("./AbstractRepository");

class UsersRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "users" as configuration
    super({ table: "users" });
  }

  // The C of CRUD - Create operation

  async create(users) {
    // Execute the SQL INSERT query to add a new users to the "users" table
    const [result] = await this.database.query(
      `insert into ${this.table} (roles_id, firstname, lastname, avatar, points, city, email, password) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        users.roles_id,
        users.firstname,
        users.lastname,
        users.avatar,
        users.points,
        users.city,
        users.email,
        users.password,
      ]
    );

    // Return the ID of the newly inserted users
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific users by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the users
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "users" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of users
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing users

  // async update(users) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an users by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = UsersRepository;
