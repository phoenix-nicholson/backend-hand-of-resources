const pool = require('../utils/pool');

module.exports = class Miklo {
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
    const miklo = new Miklo(rows[0]);
    return miklo;
  }
};
