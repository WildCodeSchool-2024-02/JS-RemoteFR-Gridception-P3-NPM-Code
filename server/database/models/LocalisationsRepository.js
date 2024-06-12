const AbstractRepository = require("./AbstractRepository");

class LocalisationsRepository extends AbstractRepository {
  constructor() {
    super({ table: "localisations" });
  }

  async create(Localisations) {
    const [result] = await this.database.query(
      `insert into ${this.table} (latitude, longitude) values (?, ?)`,
      [Localisations.latitude, Localisations.longitude]
    );

    return result.insertId;
  }

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific street_art by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}

module.exports = LocalisationsRepository;
