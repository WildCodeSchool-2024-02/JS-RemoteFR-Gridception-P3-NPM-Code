const AbstractRepository = require("./AbstractRepository");

class PicturesRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "pictures" });
  }

  // The C of CRUD - Create operation

  async create(pictures) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (street_arts_id, name, URL, DATE, is_valid) values (?, ?, ?, ?, ?)`,
      [
        pictures.street_arts_id,
        pictures.name,
        pictures.URL,
        pictures.DATE,
        pictures.is_valid,
      ]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  async readByUserId(id) {
    const [rows] = await this.database.query(
      `select p.url from ${this.table} p 
inner join street_arts s on s.id = p.street_arts_id 
inner join users u on u.id= s.users_id where u.id = ?`,
      [id]
    );
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = PicturesRepository;
