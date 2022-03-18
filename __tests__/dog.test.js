const setup = require('../data/setup');
const app = require('../lib/app');
const request = require('supertest');
const pool = require('../lib/utils/pool');
const { createMiklo, getDogId } = require('../lib/models/Dog');
const Dog = require('../lib/models/Dog');

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
    const dog1 = await Dog.createMiklo({
      id: expect.any(String),
      name: 'Miklo',
      favtoy: 'Soccer Ball',
    });

    const dog2 = await Dog.createMiklo({
      id: expect.any(String),
      name: 'Luna',
      favtoy: 'Anything',
    });

    const res = await request(app).get('/api/v1/dog');
    expect(res.body).toEqual([dog1, dog2]);
  });

  it('Should be able to get a dogs id', async () => {
    const dog = await createMiklo({
      id: expect.any(String),
      name: 'Miklo',
      favtoy: 'Soccer Ball',
    });

    const res = await request(app).get(`/api/v1/dog/${dog.id}`);
    expect(res.body).toEqual(dog);
  });

  it('Should be able to update a dog', async () => {
    const dog = await Dog.createMiklo({
      id: expect.any(String),
      name: 'Miklo',
      favtoy: 'Soccer Ball',
    });
    const expected = {
      id: expect.any(String),
      name: 'Luna',
      favtoy: 'Anything',
    };
    const res = await request(app)
      .patch(`/api/v1/dog/${dog.id}`)
      .send({ name: 'Luna', favtoy: 'Anything' });

    expect(res.body).toEqual(expected);
    expect(await getDogId(dog.id)).toEqual(expected);
  });

  it('Should be able to delete a dog', async () => {
    const dog = await Dog.createMiklo({
      name: 'Miklo',
      favtoy: 'Soccer Ball',
    });

    const res = await request(app).delete(`/api/v1/dog/${dog.id}`);
    expect(res.body).toEqual(dog);
  });
});
