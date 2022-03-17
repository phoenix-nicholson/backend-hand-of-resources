const { Router } = require('express');
const Mangaka = require('../models/Mangaka');
const { createMangaka } = require('../models/Mangaka');

module.exports = Router().post('/', async (req, res) => {
  try {
    const mangaka = await Mangaka.createMangaka({
      name: req.body.name,
      series: req.body.series,
    });
    res.json(mangaka);
  } catch (error) {
    error;
  }
});
