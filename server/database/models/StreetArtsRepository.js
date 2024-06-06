const AbstractRepository = require("./AbstractRepository");

class streetArtsRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "streetArts" as configuration
    super({ table: "streetArts" });
  }

  // The C of CRUD - Create operation

  async create(streetArts) {
    // Execute the SQL INSERT query to add a new streetArts to the "streetArts" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, description, artist, is_valid ) values (?, ?, ?, ?)`,
      [streetArts.title, streetArts.description, streetArts.artist, streetArts.is_valid]
    );

    // Return the ID of the newly inserted streetArts
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific streetArts by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the streetArts
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all streetArts from the "streetArts" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of streetArts
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing streetArts

  // async update(streetArts) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an streetArts by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = streetArtsRepository;