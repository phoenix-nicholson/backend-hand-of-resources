const pool = require('../utils/pool');

module.exports = class Mangaka {
  id;
  name;
  series;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.series = row.series;
  }

  static async createMangaka({ name, series }) {
    const { rows } = await pool.query(
      'INSERT INTO mangaka(name, series) VALUES ($1, $2) RETURNING *;',
      [name, series]
    );
    const mangaka = new Mangaka(rows[0]);
    return mangaka;
  }
};
