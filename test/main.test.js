require('../src/utils/configEnv');
const supertest = require('supertest');
const app = require('../src/app');
const models = require('../src/utils/loadModels');

const request = supertest(app);

beforeAll(async () => {
  await Promise.all(Object.values(models).map(model => model.sync({ force: true })));
});

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

describe('user', () => {
  it('should create user', async () => {
    const res = await request.post('/user/register')
      .expect(200);

    expect(res.body.name).toBe('test_user');
    const dbResult = await models.User.findOne({
      name: 'test_user',
    });
    expect(dbResult).toBeTruthy();
  });
});
