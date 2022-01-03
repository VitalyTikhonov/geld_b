const router = require('express').Router();

// const signup = require('./signup');
// const signin = require('./signin');
// const signout = require('./signout');
// const auth = require('../middleware/auth');
const assets = require('./assets');
const transactions = require('./transactions');
const NotFoundError = require('../errors/NotFoundError');

// router.use('/signup', signup);
// router.use('/signin', signin);
// router.use('/signout', signout);
// router.use(auth);
router.use('/assets', assets);
router.use('/transactions', transactions);
router.use((req, res, next) => next(new NotFoundError()));

module.exports = router;
