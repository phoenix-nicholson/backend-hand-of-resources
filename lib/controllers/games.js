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
    try {
      const gameId = await Game.getGamesById(req.params.id);
      res.json(gameId);
    } catch (error) {
      error;
    }
  })
  .patch('/:id', async (req, res, next) => {
    try {
      const editedGame = await Game.updateGame(req.params.id, req.body);
      res.json(editedGame);
    } catch (error) {
      next(error);
    }
  })
  .delete('/:id', async (req, res) => {
    const deleteGame = await Game.deleteGame(req.params.id);
    res.json(deleteGame);
  });
