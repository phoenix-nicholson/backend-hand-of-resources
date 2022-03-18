const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-hand-of-resources routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it.only('should be able to create a game', async () => {
    const res = await request(app)
      .post('/api/v1/games')
      .send({ title: 'Elden Ring', genre: 'Open World' });
    expect(res.body).toEqual({
      id: expect.any(String),
      title: 'Elden Ring',
      genre: 'Open World',
    });
  });
});
