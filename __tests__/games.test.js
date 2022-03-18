const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Game = require('../lib/models/Games');
const { createGame, getGamesById } = require('../lib/models/Games');
const req = require('express/lib/request');

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

  it('should be able get a game by id', async () => {
    const game = await createGame({
      id: expect.any(String),
      title: 'Elden Ring',
      genre: 'Open World',
    });
    const res = await request(app).get(`/api/v1/games/${game.id}`);
    expect(res.body).toEqual(game);
  });

  it('should be able to update a game', async () => {
    const game = await createGame({
      id: expect.any(String),
      title: 'Elden Ring',
      genre: 'Open World',
    });
    const expected = {
      id: expect.any(String),
      title: 'Spider Man',
      genre: 'Action',
    };

    const res = await request(app)
      .patch(`/api/v1/games/${game.id}`)
      .send({ title: 'Spider Man', genre: 'Action' });

    expect(res.body).toEqual(expected);
    expect(await getGamesById(game.id)).toEqual(expected);
  });

  it.only('Should be able to delete', async () => {
    const game = await Game.createGame({
      title: 'Elden Ring',
      genre: 'Open World',
    });
    const res = await request(app).delete(`/api/v1/games/${game.id}`);
    expect(res.body).toEqual(game);
    expect(await getGamesById(game.id)).toBeNull();
  });
});
