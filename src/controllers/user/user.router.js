const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.json({
    id: 1,
    name: 'test user',
  });
});

module.exports = router;
