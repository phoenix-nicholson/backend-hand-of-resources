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
  .get('/', async (req, res) => {
    const game1 = {
      id: '1',
      title: 'Elden Ring',
      genre: 'Open World',
    };
    const game2 = {
      id: '2',
      title: 'Spider Man',
      genre: 'Action',
    };
    res.send([game1, game2]);
  });
