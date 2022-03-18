const { Router } = require('express');
const Food = require('../models/Food');

module.exports = Router().post('/', async (req, res) => {
  const food = { id: '1', item: 'Sushi', origin: 'Japan' };
  res.send(food);
});
