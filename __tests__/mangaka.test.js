const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { createMangaka } = require('../lib/models/Mangaka');
const Mangaka = require('../lib/models/Mangaka');

describe('backend-hand-of-resources routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should be able to create a mangaka', async () => {
    const res = await request(app)
      .post('/api/v1/mangaka')
      .send({ name: 'Eiichiro Oda', series: 'One Piece' });

    expect(res.body).toEqual({
      id: expect.any(String),
      name: 'Eiichiro Oda',
      series: 'One Piece',
    });
  });

  it('should be able to list all mangaka', async () => {
    const mangaka1 = await Mangaka.createMangaka({
      name: 'Eiichiro Oda',
      series: 'One Piece',
    });

    const mangaka2 = await Mangaka.createMangaka({
      name: 'Kentari Mirua',
      series: 'Berserk',
    });

    const res = await request(app).get('/api/v1/mangaka');

    expect(res.body).toEqual([mangaka1, mangaka2]);
  });

  it('should be able to get mangaka by id', async () => {
    const mangaka = await createMangaka({
      id: expect.any(String),
      name: 'Eiichiro Oda',
      series: 'One Piece',
    });
    const res = await request(app).get(`/api/v1/mangaka/${mangaka.id}`);
    expect(res.body).toEqual(mangaka);
  });
});
