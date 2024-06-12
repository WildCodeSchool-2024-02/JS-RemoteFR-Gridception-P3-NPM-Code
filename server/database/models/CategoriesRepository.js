const AbstractRepository = require("./AbstractRepository");

class CategoriesRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "categories" as configuration
    super({ table: "categories" });
  }

  // The C of CRUD - Create operation

  async create(categories) {
    // Execute the SQL INSERT query to add a new categories to the "categories" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name) values (?)`,
      [categories.name]
    );

    // Return the ID of the newly inserted categories
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific categories by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the categories
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all categories from the "categories" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of categories
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing categories

  // async update(categories) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an categories by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = CategoriesRepository;
