
require('../../src/utils/configEnv');
const supertest = require('supertest');
const Joi = require('joi');
const joiValidation = require('../../src/middlewares/joiValidation');
const express = require('express');
const bodyParser = require('body-parser');

describe('joi validation middleware', () => {
  it('should validate and throw error', async () => {
    const app = express()
      .use(bodyParser.json())
      .use(joiValidation.body({
        name: Joi.string().min(3),
      }), (error, req, res, next) => { // eslint-disable-line no-unused-vars
        if (error && error.status) {
          res.status(error.status);
        }
        res.json(error || {});
      });

    const errorResponse = await supertest(app).post('/').send({
      name: 'ya',
    }).expect(400);
    expect(errorResponse.body.extra.isJoi).toBe(true);

    await supertest(app).post('/').send({
      name: 'aabc',
    });
  });
});
