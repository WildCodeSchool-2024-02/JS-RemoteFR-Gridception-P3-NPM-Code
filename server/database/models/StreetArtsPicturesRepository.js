const AbstractRepository = require("./AbstractRepository");

class streetArtsPicturesRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "streetArtsPictures" as configuration
    super({ table: "streetArtsPictures" });
  }

  // The C of CRUD - Create operation

  async create(streetArtsPictures) {
    // Execute the SQL INSERT query to add a new streetArtsPictures to the "streetArtsPictures" table
    const [result] = await this.database.query(
      `insert into ${this.table} (users_id, street_arts_id ) values (?, ?)`,
      [streetArtsPictures.pictures_id, streetArtsPictures.street_art_id]
    );

    // Return the ID of the newly inserted streetArtsPictures
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific streetArtsPictures by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the streetArtsPictures
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all streetArtsPictures from the "streetArtsPictures" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of streetArtsPictures
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing streetArtsPictures

  // async update(streetArtsPictures) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an streetArtsPictures by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = streetArtsPicturesRepository;
