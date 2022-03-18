const { Router } = require('express');
const Food = require('../models/Food');

module.exports = Router().post('/', async (req, res) => {
  const food = await Food.createFood({
    item: req.body.item,
    origin: req.body.origin,
  });
  res.json(food);
});
