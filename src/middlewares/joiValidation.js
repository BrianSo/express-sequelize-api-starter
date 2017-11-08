const Joi = require('joi');
const { createJoiError } = require('../utils/errors');

const joiValidation = (schema) => async (req, res, next) => {
  try {
    // eslint-disable-next-line
    for (const key of Object.keys(schema)) {
      const result = await Joi.validate(req[key], schema[key]);
      req[key] = result;
    }
    next();
  } catch (e) {
    next(createJoiError(e));
  }
};
joiValidation.body = (schema) => joiValidation({ body: schema });
joiValidation.query = (schema) => joiValidation({ query: schema });
joiValidation.params = (schema) => joiValidation({ params: schema });
joiValidation.cookies = (schema) => joiValidation({ cookies: schema });
joiValidation.session = (schema) => joiValidation({ session: schema });

module.exports = joiValidation;
