const supertest = require('supertest');

const app = require('../src/app');

const request = supertest(app);

describe('app', () => {
  it('should work', async () => {
    const res = await request.get('/')
      .expect(200);
    expect(res.body).toBe('online');
  });

  it('has user route', async () => {
    await request.get('/user')
      .expect(200);
  });

  it('has account route', async () => {
    await request.get('/account')
      .expect(200);
  });
});
