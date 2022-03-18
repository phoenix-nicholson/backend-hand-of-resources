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
    const dog1 = { name: 'Miklo', favtoy: 'Soccer Ball' };
    const dog2 = { name: 'Luna', favtoy: 'Anything' };
    res.send([dog1, dog2]);
  });
