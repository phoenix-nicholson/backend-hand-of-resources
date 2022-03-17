const { Router } = require('express');
const Mangaka = require('../models/Mangaka');
const { createMangaka } = require('../models/Mangaka');
const { pool } = require('../utils/pool');

module.exports = Router().post('/', async (req, res) => {
  const mangaka = await Mangaka.createMangaka({
    name: req.body.name,
    series: req.body.series,
  });
  res.json(mangaka);
});
