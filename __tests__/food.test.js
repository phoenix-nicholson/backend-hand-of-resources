const setup = require('../data/setup');
const app = require('../lib/app');
const request = require('supertest');
const pool = require('../lib/utils/pool');
const Food = require('../lib/models/Food');
const { createFood, getFoodId } = require('../lib/models/Food');

describe('backend-hand-of-resources routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should be able to create some food', async () => {
    const res = await request(app)
      .post('/api/v1/food')
      .send({ item: 'Sushi', origin: 'Japan' });
    expect(res.body).toEqual({
      id: expect.any(String),
      item: 'Sushi',
      origin: 'Japan',
    });
  });

  it('should be able to list all the food', async () => {
    const food1 = await Food.createFood({
      item: 'Sushi',
      origin: 'Japan',
    });
    const food2 = await Food.createFood({
      item: 'Burger',
      origin: 'America',
    });

    const res = await request(app).get('/api/v1/food');
    expect(res.body).toEqual([food1, food2]);
  });

  it('Should get a food item by id', async () => {
    const food = await createFood({
      id: expect.any(String),
      item: 'Sushi',
      origin: 'Japan',
    });
    const res = await request(app).get(`/api/v1/food/${food.id}`);
    expect(res.body).toEqual(food);
  });

  it('Should update food ', async () => {
    const food = await Food.createFood({
      item: 'Sushi',
      origin: 'Japan',
    });
    const expected = {
      id: expect.any(String),
      item: 'Fried Rice',
      origin: 'Thailand',
    };

    const res = await request(app).patch('/api/v1/food/1').send({
      item: 'Fried Rice',
      origin: 'Thailand',
    });

    expect(res.body).toEqual(expected);
    expect(await getFoodId(food.id)).toEqual(expected);
  });

  it('Should delete food', async () => {
    const food = await Food.createFood({ item: 'Sushi', origin: 'Japan' });

    const res = await request(app).delete(`/api/v1/food/${food.id}`);
    expect(res.body).toEqual(food);
  });
});
