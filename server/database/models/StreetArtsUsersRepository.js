const AbstractRepository = require("./AbstractRepository");

class streetArtsUsersRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "streetArtsUsers" as configuration
    super({ table: "streetArtsUsers" });
  }

  // The C of CRUD - Create operation

  async create(streetArtsUsers) {
    // Execute the SQL INSERT query to add a new streetArtsUsers to the "streetArtsUsers" table
    const [result] = await this.database.query(
      `insert into ${this.table} (users_id, street_arts_id ) values (?, ?)`,
      [streetArtsUsers.users_id, streetArtsUsers.street_art_id]
    );

    // Return the ID of the newly inserted streetArtsUsers
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific streetArtsUsers by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the streetArtsUsers
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all streetArtsUsers from the "streetArtsUsers" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of streetArtsUsers
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing streetArtsUsers

  // async update(streetArtsUsers) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an streetArtsUsers by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = streetArtsUsersRepository;
