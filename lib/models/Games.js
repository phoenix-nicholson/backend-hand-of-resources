const pool = require('../utils/pool');
const Dog = require('./Dog');

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
  static async getAllGames() {
    const { rows } = await pool.query('SELECT * FROM games');
    return rows.map((row) => new Game(row));
  }

  static async getGamesById(id) {
    const { rows } = await pool.query('SELECT * FROM games WHERE id=$1', [id]);
    return new Game(rows[0]);
  }

  static async updateGame(id, attributes) {
    const currentGame = await Game.getGamesById(id);

    const editedGame = { ...currentGame, ...attributes };
    const { title, genre } = editedGame;

    const { rows } = await pool.query(
      'UPDATE games SET title=$2, genre=$3 WHERE id=$1 RETURNING *;',
      [id, title, genre]
    );
    return new Game(rows[0]);
  }
};
