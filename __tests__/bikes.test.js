const app = require('../lib/app');
const request = require('supertest');
const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const Bike = require('../lib/models/Bikes');
const { createBike } = require('../lib/models/Bikes');

describe('backend-hand-of-resources routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should be able to create a bike', async () => {
    const res = await request(app)
      .post('/api/v1/bike')
      .send({ brand: 'Honda', type: 'Grom' });

    expect(res.body).toEqual({
      id: expect.any(String),
      brand: 'Honda',
      type: 'Grom',
    });
  });

  it('Should be able to list all bikes', async () => {
    const bike1 = await Bike.createBike({ brand: 'Honda', type: 'Grom' });
    const bike2 = await Bike.createBike({ brand: 'Harley', type: 'Iron 833' });

    const res = await request(app).get('/api/v1/bike');

    expect(res.body).toEqual([bike1, bike2]);
  });

  it('Should be able to  get by id', async () => {
    const bike = await createBike({
      id: expect.any(String),
      brand: 'Honda',
      type: 'Grom',
    });
    const res = await request(app).get(`api/v1/bike/${bike.id}`);
    expect(res.body).toEqual(bike);
  });
});
