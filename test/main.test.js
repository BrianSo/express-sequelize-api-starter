const supertest = require('supertest');

const app = require('../src/app');

const request = supertest(app);

describe('app', () => {
    it('should work', async () => {
        let res = await request.get('/')
            .expect(200);
        expect(res.body).toBe('online');
    });
});
