const { Router } = require('express');
const User = require('../../models/User');

const router = Router();

router.get('/', (req, res) => {
  res.json({
    id: 1,
    name: 'test user',
  });
});

router.post('/register', async (req, res) => {
  console.log('call create user');
  const result = await User.create({
    name: 'test_user',
  });
  res.json(result);
});

module.exports = router;
