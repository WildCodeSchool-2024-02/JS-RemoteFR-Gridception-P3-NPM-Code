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

  async update(streetArtsCategories) {
    // Execute the SQL UPDATE query to update a specific streetArtsCategories
    const [result] = await this.database.query(
      `update ${this.table} set categories_id = ?, street_arts_id == ? where id = ?`,
      [
        streetArtsCategories.categories_id,
        streetArtsCategories.street_arts_id,
        streetArtsCategories.id,
      ]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    // Execute the SQL DELETE query to delete a specific streetArtsCategories
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

module.exports = StreetArtsCategoriesRepository;
