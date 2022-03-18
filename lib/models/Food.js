const pool = require('../utils/pool');

module.exports = class Food {
  id;
  name;
  series;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.series = row.series;
  }

  static async createFood({ item, origin }) {
    const { rows } = await pool.query(
      'INSERT INTO food(item, origin) VALUES ($1, $2) RETURNING *;',
      [item, origin]
    );
  }
};
