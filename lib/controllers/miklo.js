const { Router } = require('express');
const Miklo = require('../models/Miklo');

module.exports = Router().post('/', async (req, res) => {
  try {
    const miklo = await Miklo.createMiklo({
      name: req.body.name,
      favtoy: req.body.favtoy,
    });
    res.send(miklo);
  } catch (error) {
    error;
  }
});
