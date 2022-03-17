const { Router } = require('express');
const Mangaka = require('../models/Mangaka');
const { createMangaka } = require('../models/Mangaka');

module.exports = Router()
  .post('/', async (req, res) => {
    try {
      const mangaka = await Mangaka.createMangaka({
        name: req.body.name,
        series: req.body.series,
      });
      res.json(mangaka);
    } catch (error) {
      error;
    }
  })
  .get('/', async (req, res) => {
    try {
      const allMangaka = await Mangaka.getAllMangaka({
        name: req.body.name,
        series: req.body.series,
      });
      res.json(allMangaka);
    } catch (error) {
      error;
    }
  });
