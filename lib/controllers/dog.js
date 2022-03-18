const { Router } = require('express');
const Dog = require('../models/Dog');

module.exports = Router()
  .post('/', async (req, res) => {
    try {
      const miklo = await Dog.createMiklo({
        name: req.body.name,
        favtoy: req.body.favtoy,
      });
      res.json(miklo);
    } catch (error) {
      error;
    }
  })
  .get('/', async (req, res) => {
    try {
      const dog = await Dog.getAllDogs();
      res.json(dog);
    } catch (error) {
      error;
    }
  })
  .get('/:id', async (req, res) => {
    const dogId = { id: '1', name: 'Miklo', favtoy: 'Soccer Ball' };
    res.send(dogId);
  });
