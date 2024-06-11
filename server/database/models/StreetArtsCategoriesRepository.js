const AbstractRepository = require("./AbstractRepository");

class StreetArtsCategoriesRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "streetArtsCategories" as configuration
    super({ table: "streetArtsCategories" });
  }

  // The C of CRUD - Create operation

  async create(streetArtsCategories) {
    // Execute the SQL INSERT query to add a new streetArtsCategories to the "streetArtsCategories" table
    const [result] = await this.database.query(
      `insert into ${this.table} (categories_id, street_arts_id ) values (?, ?)`,
      [streetArtsCategories.categories_id, streetArtsCategories.street_arts_id]
    );

    // Return the ID of the newly inserted streetArtsCategories
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific streetArtsCategories by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the streetArtsCategories
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all streetArtsCategories from the "streetArtsCategories" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of streetArtsCategories
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing streetArtsCategories

  // async update(streetArtsCategories) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an streetArtsCategories by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = StreetArtsCategoriesRepository;
