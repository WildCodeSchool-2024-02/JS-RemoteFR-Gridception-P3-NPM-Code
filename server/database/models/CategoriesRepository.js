const AbstractRepository = require("./AbstractRepository");

class CategoriesRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "catagories" as configuration
    super({ table: "catagories" });
  }

  // The C of CRUD - Create operation

  async create(catagories) {
    // Execute the SQL INSERT query to add a new catagories to the "catagories" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name) values (?)`,
      [catagories.name]
    );

    // Return the ID of the newly inserted catagories
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific catagories by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the catagories
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all catagories from the "catagories" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of catagories
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing catagories

  // async update(catagories) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an catagories by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = CategoriesRepository;
