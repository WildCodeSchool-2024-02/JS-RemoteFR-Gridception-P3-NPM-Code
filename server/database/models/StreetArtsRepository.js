const AbstractRepository = require("./AbstractRepository");

class StreetArtsRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "streetArts" as configuration
    super({ table: "street_arts" });
  }

  // The C of CRUD - Create operation

  async create(streetArts) {
    // Execute the SQL INSERT query to add a new streetArts to the "streetArts" table
    const [result] = await this.database.query(
      `insert into ${this.table} (users_id, title, description, artist, latitude, longitude, is_valid ) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        streetArts.users_id,
        streetArts.title,
        streetArts.description,
        streetArts.artist,
        streetArts.latitude,
        streetArts.longitude,
        streetArts.is_valid,
      ]
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

  async readAllByPictures() {
    // Execute the SQL SELECT query to retrieve all streetArts from the "streetArts" table
    const [rows] = await this.database.query(
      `select p.url, s.title, s.latitude, s.longitude from ${this.table} s 
      inner join pictures p on p.street_arts_id = s.id `
    );

    // Return the array of streetArts
    return rows;
  }

  async readByPicture(id) {
    // Execute the SQL SELECT query to retrieve a specific streetArts by its ID
    const [rows] = await this.database.query(
      `select p.url, s.title, s.latitude, s.longitude from ${this.table} s 
      inner join pictures p on p.street_arts_id = s.id
      where s.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the streetArts
    return rows[0];
  }

  // The U of CRUD - Update operation
  // : Implement the update operation to modify an existing streetArts

  // async update(streetArts) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  //  Implement the delete operation to remove an streetArts by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = StreetArtsRepository;
