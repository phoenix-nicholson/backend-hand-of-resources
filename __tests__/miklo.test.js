const setup = require('../data/setup');
const app = require('../lib/app');
const request = require('supertest');
const pool = require('../lib/utils/pool');

describe('backend-hand-of-resources routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should be able to create a dog', async () => {
    const res = await request(app)
      .post('/api/v1/miklo')
      .send({ name: 'Miklo', favtoy: 'Soccer Ball' });

    expect(res.body).toEqual({
      id: expect.any(String),
      name: 'Miklo',
      favtoy: 'Soccer Ball',
    });
  });
});
