const { Router } = require('express');
const Food = require('../models/Food');

module.exports = Router()
  .post('/', async (req, res) => {
    const food = await Food.createFood({
      item: req.body.item,
      origin: req.body.origin,
    });
    res.json(food);
  })
  .get('/', async (req, res) => {
    const allFood = await Food.getAllFood();
    res.json(allFood);
  })
  .get('/:id', async (req, res) => {
    const foodId = await Food.getFoodId(req.params.id);
    res.json(foodId);
  })
  .patch('/:id', async (req, res) => {});
