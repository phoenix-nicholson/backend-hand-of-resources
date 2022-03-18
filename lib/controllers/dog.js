const { Router } = require('express');
const { getDogId } = require('../models/Dog');
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
    try {
      const dogId = await Dog.getDogId(req.params.id);
      res.json(dogId);
    } catch (error) {
      error;
    }
  })
  .patch('/:id', async (req, res, next) => {
    try {
      const editDog = await Dog.updateDog(req.params.id, req.body);
      res.json(editDog);
    } catch (error) {
      next(error);
    }
  });
