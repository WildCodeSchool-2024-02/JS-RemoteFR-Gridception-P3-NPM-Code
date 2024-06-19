const AbstractRepository = require("./AbstractRepository");

class ContactsRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "contacts" as configuration
    super({ table: "contacts" });
  }

  // The C of CRUD - Create operation

  async create(contacts) {
    // Execute the SQL INSERT query to add a new contacts to the "contacts" table
    const [result] = await this.database.query(
      `insert into ${this.table} (fullname, mail, message) values (?, ?, ?)`,
      [contacts.fullname, contacts.mail, contacts.message]
    );

    // Return the ID of the newly inserted contacts

    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific contacts by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the contacts
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all contacts from the "contacts" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of contacts
    return rows;
  }

  // The U of CRUD - Update operation
  // : Implement the update operation to modify an existing contacts

  async update(contacts) {
    // Execute the SQL UPDATE query to update a specific category
    const [result] = await this.database.query(
      `update ${this.table} set fullname = ?, mail = ?, message= ?  where id = ?`,
      [contacts.fullname, contacts.mail, contacts.message, contacts.id]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  // : Implement the delete operation to remove an contacts by its ID

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

module.exports = ContactsRepository;
