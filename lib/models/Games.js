const pool = require('../utils/pool');

module.exports = class Game {
  id;
  title;
  genre;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.genre = row.genre;
  }

  static async createGame({ title, genre }) {
    const { rows } = await pool.query(
      'INSERT INTO games(title, genre) VALUES ($1, $2) RETURNING *;',
      [title, genre]
    );
    return new Game(rows[0]);
  }
};
