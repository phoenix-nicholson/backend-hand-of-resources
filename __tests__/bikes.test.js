const req = require('express/lib/request');
const app = require('../lib/app');
const { request } = require('../lib/app');

describe('backend-hand-of-resources routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should be able to create a bike', async () => {
    const res = await request(app)
      .post('/api/v1/bikes')
      .send({ id: expect.any(String), brand: 'Honda', type: 'Grom' });

    expect(res.body).toEqual({
      id: expect.any(String),
      brand: 'Honda',
      type: 'Grom',
    });
  });
});
