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
      const allMangaka = await Mangaka.getAllMangaka();
      res.json(allMangaka);
    } catch (error) {
      error;
    }
  })
  .get('/:id', async (req, res) => {
    const mangakaId = await Mangaka.getMangakaById(req.params.id);
    res.json(mangakaId);
  })
  .patch('/:id', async (req, res, next) => {
    try {
      const editMangaka = await Mangaka.upadateMangaka(req.params.id, req.body);
      res.json(editMangaka);
    } catch (error) {
      next(error);
    }
  })
  .delete('/:id', async (req, res) => {
    const removeMangaka = await Mangaka.deleteMangaka(req.params.id, req.body);
    res.json(removeMangaka);
  });
