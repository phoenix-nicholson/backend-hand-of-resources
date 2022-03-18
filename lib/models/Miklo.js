const pool = require('../utils/pool');

module.exports = class Miklo {
  id;
  name;
  favToy;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.favToy = row.favToy;
  }

  static async createMiklo({ name, favToy }) {
    const { rows } = await pool.query(
      'INSERT INTO miklo(name, favToy) VALUES ($1, $2) RETURNING *;',
      [name, favToy]
    );
  }
};
