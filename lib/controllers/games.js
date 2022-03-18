module.export = Router().post('/', async (req, res) => {
  const games = { title: 'Elden Ring', genre: 'Open World' };
  res.send(games);
});
