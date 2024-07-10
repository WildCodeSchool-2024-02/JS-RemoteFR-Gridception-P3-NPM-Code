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

      `insert into ${this.table} (users_id, file, title, description, artist, latitude, longitude, is_valid ) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        streetArts.users_id,
        streetArts.file,
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

  async browseByPictures() {
    // Execute the SQL SELECT query to retrieve all streetArts from the "streetArts" table
    const [rows] = await this.database.query(
      `select s.file, s.title, s.latitude, s.longitude from ${this.table} s 
      inner join pictures p on s.id = p.street_arts_id`
    );

    // Return the array of streetArts
    return rows;
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

  async readByPicture(id) {
    // Execute the SQL SELECT query to retrieve a specific streetArts by its ID
    const [rows] = await this.database.query(
      `select s.file, s.title, s.latitude, s.longitude from ${this.table} s 
      inner join pictures p on p.street_arts_id = s.id
      where s.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the streetArts
    return rows[0];
  }

  // The U of CRUD - Update operation

  async update(streetArts) {
    // Execute the SQL UPDATE query to update a specific category
    const [result] = await this.database.query(
      `update ${this.table} set users_id = ?, file = ?, title = ?, description = ?, artist = ?, latitude = ?, longitude = ?, is_valid = ? where id = ?`, // il y avais une virgule ici normal ?
      [
        streetArts.users_id,
        streetArts.file,
        streetArts.title,
        streetArts.description,
        streetArts.artist,
        streetArts.latitude,
        streetArts.longitude,
        streetArts.is_valid,
        streetArts.id,
      ]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation

async delete(id) {
  // Pour règles les soucis de FK
  await this.database.query(
    `DELETE FROM pictures WHERE street_arts_id = ?`,
    [id]
  );

  await this.database.query(
    `DELETE FROM street_arts_categories WHERE street_arts_id = ?`,
    [id]
  );

  // Supprimez l'enregistrement de la table street_arts
  const [result] = await this.database.query(
    `DELETE FROM ${this.table} WHERE id = ?`,
    [id]
  );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

module.exports = StreetArtsRepository;
