const pool = require('../utils/pool');

module.exports = class Dog {
  id;
  name;
  favtoy;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.favtoy = row.favtoy;
  }

  static async createMiklo({ name, favtoy }) {
    const { rows } = await pool.query(
      'INSERT INTO dog(name, favtoy) VALUES ($1, $2) RETURNING *;',
      [name, favtoy]
    );
    const miklo = new Dog(rows[0]);
    return miklo;
  }

  static async getAllDogs() {
    const { rows } = await pool.query('SELECT * FROM dog');
    return rows.map((row) => new Dog(row));
  }

  static async getDogId(id) {
    const { rows } = await pool.query('SELECT * FROM dog WHERE id=$1', [id]);
    const dogId = new Dog(rows[0]);
    return dogId;
  }
};
