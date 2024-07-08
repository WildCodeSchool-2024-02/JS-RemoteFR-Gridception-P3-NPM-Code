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
        users.hashedPassword,
      ]
    );

    // Return the ID of the newly inserted users
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific users by its ID
    const [rows] = await this.database.query(
      `select id, roles_id, firstname, lastname, avatar, points, city, email from ${this.table} where id = ?`,
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

  async readByEmailWithPassword(email) {
    // Execute the SQL SELECT query to retrieve a specific user by its email
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  // The U of CRUD - Update operation

  async update(users) {
    // Execute the SQL UPDATE query to update a specific category
    const [result] = await this.database.query(
      `update ${this.table} set roles_id = ?, firstname = ?, lastname = ?, avatar = ?, points = ?, city = ?, email = ?, password = ? where id = ?`,
      [
        users.roles_id,
        users.firstname,
        users.lastname,
        users.avatar,
        users.points,
        users.city,
        users.email,
        users.password,
        users.id,
      ]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation

  async delete(id) {
    // Execute the SQL DELETE query to delete a specific category
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

module.exports = UsersRepository;
