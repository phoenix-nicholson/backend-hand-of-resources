const { Router } = require('express');
const Dog = require('../models/Dog');

module.exports = Router().post('/', async (req, res) => {
  try {
    const miklo = await Dog.createMiklo({
      name: req.body.name,
      favtoy: req.body.favtoy,
    });
    res.send(miklo);
  } catch (error) {
    error;
  }
});
