const pool = require('../utils/pool');

module.exports = class Food {
  id;
  item;
  origin;

  constructor(row) {
    this.id = row.id;
    this.item = row.item;
    this.origin = row.origin;
  }

  static async createFood({ item, origin }) {
    const { rows } = await pool.query(
      'INSERT INTO food(item, origin) VALUES ($1, $2) RETURNING *;',
      [item, origin]
    );
    return new Food(rows[0]);
  }
  static async getAllFood() {
    const { rows } = await pool.query('SELECT * FROM food');
    return rows.map((row) => new Food(row));
  }
};
