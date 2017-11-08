const { Router } = require('express');
const User = require('../../models/User');
const Joi = require('joi');
const joiValidation = require('../../middlewares/joiValidation');

const router = Router();

router.get('/', (req, res) => {
  res.json({
    id: 1,
    name: 'test user',
  });
});

router.post('/register', joiValidation.body({
  name: Joi.string().token().min(3).max(30)
    .required(),
  password: Joi.string().regex(/^[a-f0-9]{40}$/),
}), async (req, res) => {
  const result = await User.create({
    name: req.body.name,
    password: req.body.password,
  });
  res.json(result);
});

module.exports = router;
