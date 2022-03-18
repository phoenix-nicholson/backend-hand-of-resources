const setup = require('../data/setup');
const app = require('../lib/app');
const request = require('supertest');
const pool = require('../lib/utils/pool');
const { createMiklo } = require('../lib/models/Dog');
const Miklo = require('../lib/models/Dog');

describe('backend-hand-of-resources routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should be able to create a dog', async () => {
    const res = await request(app)
      .post('/api/v1/dog')
      .send({ name: 'Miklo', favtoy: 'Soccer Ball' });

    expect(res.body).toEqual({
      id: expect.any(String),
      name: 'Miklo',
      favtoy: 'Soccer Ball',
    });
  });

  it('Should be able to list all dogs', async () => {
    // const miklo1 = await Miklo.createMiklo({
    //   name: 'Miklo',
    //   favtoy: 'Soccer Ball'
    // });
    // const miklo2 =
  });
});
