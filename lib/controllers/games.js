const { Router } = require('express');
const Game = require('../models/Games');

module.exports = Router()
  .post('/', async (req, res) => {
    try {
      const games = await Game.createGame({
        title: req.body.title,
        genre: req.body.genre,
      });
      res.json(games);
    } catch (error) {
      error;
    }
  })
  .get('/', async (req, res) => {
    try {
      const game = await Game.getAllGames();
      res.json(game);
    } catch (error) {
      error;
    }
  });
