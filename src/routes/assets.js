const router = require('express').Router();

const { createAsset, getAllAssets, updateAsset, getAsset, deleteAsset } = require('../controllers/assets');

router.post('/', createAsset);
router.get('/', getAllAssets);
router.patch('/', updateAsset);
router.get('/:id', getAsset);
router.delete('/:id', deleteAsset);

module.exports = router;
