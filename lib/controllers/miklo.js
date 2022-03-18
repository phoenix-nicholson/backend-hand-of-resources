const { Router } = require('express');

module.exports = Router().post('/', async (req, res) => {
  const miklo = { name: 'Miklo', favToy: 'Soccer Ball' };
  res.send(miklo);
});
