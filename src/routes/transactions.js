const router = require('express').Router();

const { createTransaction, getAllTransactions, updateTransaction, getTransaction, deleteTransaction } = require('../controllers/transactions');

router.post('/', createTransaction);
router.get('/', getAllTransactions);
router.patch('/', updateTransaction);
router.get('/:id', getTransaction);
router.delete('/:id', deleteTransaction);

module.exports = router;
