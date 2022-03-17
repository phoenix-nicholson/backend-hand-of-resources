const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { createMangaka } = require('../lib/models/Mangaka');

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
    await createMangaka({ name: 'Eichiiro Oda', series: 'One Piece' });

    const res = await request(app).get('/api/v1/mangaka');

    expect(res.body).toEqual({
      id: expect.any(String),
      name: 'Eiichiro Oda',
      series: 'One Piece',
    });
  });
});
