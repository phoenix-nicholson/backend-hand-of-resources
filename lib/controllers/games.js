const { Router } = require('express');
const { reset } = require('nodemon');
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
      const allGames = await Game.getAllGames();
      res.json(allGames);
    } catch (error) {
      error;
    }
  })
  .get('/:id', async (req, res) => {
    const gameId = await Game.getGamesById(req.params.id);
    res.json(gameId);
  });
