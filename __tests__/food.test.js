const { request } = require('../lib/app');
const pool = require('../lib/utils/pool');

describe('backend-hand-of-resources routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it.only('should be able to create some food', async () => {
    const res = await request(app)
      .post('/api/v1/food')
      .send({ item: 'Sushi', origin: 'Japan' });
    expect(res.body).toEqual({
      id: expect.any(String),
      item: 'Sushi',
      origin: 'Japan',
    });
  });
});
