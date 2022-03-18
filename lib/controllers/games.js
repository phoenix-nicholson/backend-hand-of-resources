const { Router } = require('express');

module.exports = Router().post('/', async (req, res) => {
  const games = { id: '1', title: 'Elden Ring', genre: 'Open World' };
  res.send(games);
});
