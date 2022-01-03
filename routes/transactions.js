const router = require('express').Router();

const { getAllTransactions } = require('../controllers/transactions');

router.get('/', getAllTransactions);

module.exports = router;
