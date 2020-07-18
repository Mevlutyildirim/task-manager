const router = require('express').Router();
const Auth = require('./auth');

router.use('/auth', Auth);

module.exports = router;
