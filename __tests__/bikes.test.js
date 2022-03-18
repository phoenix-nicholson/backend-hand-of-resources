const app = require('../lib/app');
const request = require('supertest');
const pool = require('../lib/utils/pool');
const setup = require('../data/setup');

describe('backend-hand-of-resources routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it.only('should be able to create a bike', async () => {
    const res = await request(app)
      .post('/api/v1/bike')
      .send({ brand: 'Honda', type: 'Grom' });

    expect(res.body).toEqual({
      id: expect.any(String),
      brand: 'Honda',
      type: 'Grom',
    });
  });
});
