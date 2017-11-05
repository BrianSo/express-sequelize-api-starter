const { Router } = require('express');
const userRouter = require('./user/user.router');
const accountRouter = require('./account/account.router');

const router = Router();

router.use('/account', accountRouter);
router.use('/user', userRouter);

module.exports = router;
