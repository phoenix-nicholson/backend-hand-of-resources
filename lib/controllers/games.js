const { Router } = require('express');
const Game = require('../models/Games');

module.exports = Router()
  .post('/', async (req, res) => {
    const games = await Game.createGame({
      title: req.body.title,
      genre: req.body.genre,
    });
    res.json(games);
  })
  .get('/', async (req, res) => {});
