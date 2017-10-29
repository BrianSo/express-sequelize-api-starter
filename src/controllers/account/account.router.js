const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.json({
    id: 1,
    name: 'test account',
  });
});

module.exports = router;
