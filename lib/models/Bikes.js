const pool = require('../utils/pool');

module.exports = class Bike {
  id;
  brand;
  type;

  constructor(row) {
    this.id = row.id;
    this.brand = row.brand;
    this.type = row.type;
  }

  static async createBike({ brand, type }) {
    const { rows } = await pool.query(
      'INSERT INTO bike(brand, type) VALUES ($1, $2) RETURNING *;',
      [brand, type]
    );
    const bike = new Bike(rows[0]);
    return bike;
  }

  static async getAllBikes() {
    const { rows } = await pool.query('SELECT * FROM bike');
    return rows.map((row) => new Bike(row));
  }

  static async getBikeId(id) {
    const { rows } = await pool.query('SELECT * FROM bike WHERE id=$1');
    return new Bike(rows[0]);
  }
};
