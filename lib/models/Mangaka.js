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

  static async getAllMangaka() {
    const { rows } = await pool.query('SELECT * FROM mangaka');
    return rows.map((row) => new Mangaka(row));
  }

  static async getMangakaById(id) {
    const { rows } = await pool.query(`SELECT * FROM mangaka WHERE id=$1`, [
      id,
    ]);
    return new Mangaka(rows[0]);
  }

  static async upadateMangaka(id, attributes) {
    const currentMangaka = await Mangaka.getMangakaById(id);

    const editedMangaka = { ...currentMangaka, ...attributes };
    const { name, series } = editedMangaka;

    const { rows } = await pool.query(
      'UPDATE mangaka SET name=$2, crew=$3 WHERE id=$1 RETURNING *;',
      [id, name, series]
    );
    return new Mangaka(rows[0]);
  }
};
