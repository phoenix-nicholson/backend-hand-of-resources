const { request } = require('../lib/app');

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
      .send({ name: 'Miklo', favToy: 'Soccer Ball' });

    expect(res.body).toEqual({
      id: expect.any(String),
      name: 'Miklo',
      favToy: 'Soccer Ball',
    });
  });
});
