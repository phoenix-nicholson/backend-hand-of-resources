const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Game = require('../lib/models/Games');
const { createGame } = require('../lib/models/Games');

describe('backend-hand-of-resources routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should be able to create a game', async () => {
    const res = await request(app)
      .post('/api/v1/games')
      .send({ title: 'Elden Ring', genre: 'Open World' });

    expect(res.body).toEqual({
      id: expect.any(String),
      title: 'Elden Ring',
      genre: 'Open World',
    });
  });

  it('should be able to list all games', async () => {
    const game1 = await Game.createGame({
      title: 'Elden Ring',
      genre: 'Open World',
    });
    const game2 = await Game.createGame({
      title: 'Spider-Man',
      genre: 'Action',
    });
    const res = await request(app).get('/api/v1/games');
    expect(res.body).toEqual([game1, game2]);
  });

  it.only('should be able get a game by id', async () => {
    const game = await createGame({
      id: expect.any(String),
      title: 'Elden Ring',
      genre: 'Open World',
    });
    const res = await request(app).get(`/api/v1/${game.id}`);
    expect(res.body).toEqual(game);
  });
});
