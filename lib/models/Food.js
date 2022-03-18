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
  static async getFoodId(id) {
    const { rows } = await pool.query('SELECT * FROM food WHERE id=$1', [id]);
    return new Food(rows[0]);
  }
  static async updateFood(id, attributes) {
    const currentFood = await Food.getFoodId(id);

    const editedFood = { ...currentFood, ...attributes };
    const { item, origin } = editedFood;

    const { rows } = await pool.query(
      'UPDATE food SET item=$2, origin=$3 WHERE id=$1 RETURNING *;',
      [id, item, origin]
    );
    return new Food(rows[0]);
  }
};
