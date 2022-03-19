const { Router } = require('express');
const Bike = require('../models/Bikes');

module.exports = Router()
  .post('/', async (req, res) => {
    const bike = await Bike.createBike({
      brand: req.body.brand,
      type: req.body.type,
    });
    res.json(bike);
  })
  .get('/', async (req, res) => {
    const allBikes = await Bike.getAllBikes();
    res.json(allBikes);
  })
  .get('/:id', async (req, res) => {
    const bikeId = await Bike.getBikeId(req.params.id);
    res.json(bikeId);
  })
  .patch('/:id', async (req, res) => {
    const editBike = await Bike.getBikeId(req.params.id, req.body);
    res.json(editBike);
  });
