const { Router } = require('express');
const Bike = require('../models/Bikes');

module.exports = Router().post('/', async (req, res) => {
  const bike = await Bike.createBike({
    brand: req.body.brand,
    type: req.body.type,
  });
  res.json(bike);
});
