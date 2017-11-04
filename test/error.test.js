const supertest = require('supertest');
const app = require('../src/app');

const request = supertest(app);

describe('app', () => {
  it('throws 404 error', async () => {
    const res = await request.get('/fhieqowojieqw')
      .expect(404);

    expect(res.body.errorCode).toBe('RESOURCE_NOT_FOUND');
    expect(res.body.developerMessage).toBeTruthy();
  });

  it('return userMessage with translation', async () => {
    const res = await request.get('/equeiqheiw?lang=en')
      .expect(404);

    expect(res.body.userMessage).toBeTruthy();
    expect(res.body.userMessage).toBe('The requesting resources is not found from the server');

    const resOfZhLang = await request.get('/wdqidjoiqw?lang=zh_tw')
      .expect(404);

    expect(resOfZhLang.body.userMessage).toBeTruthy();
    expect(resOfZhLang.body.userMessage).toBe('找不到您請求的資源');
  });
});
