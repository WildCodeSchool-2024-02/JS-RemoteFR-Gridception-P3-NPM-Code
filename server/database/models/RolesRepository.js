const AbstractRepository = require("./AbstractRepository");

class RolesRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "roles" as configuration
    super({ table: "roles" });
  }

  // The C of CRUD - Create operation

  async create(roles) {
    // Execute the SQL INSERT query to add a new roles to the "roles" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name) values (?)`,
      [roles.name]
    );

    // Return the ID of the newly inserted roles
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific roles by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the roles
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all roles from the "roles" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of roles
    return rows;
  }

  // The U of CRUD - Update operation

  async update(roles) {
    // Execute the SQL UPDATE query to update a specific category
    const [result] = await this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [roles.name, roles.id]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation

  async delete(id) {
    // Execute the SQL DELETE query to delete a specific category
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

module.exports = RolesRepository;