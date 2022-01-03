const router = require('express').Router();

const { createAsset, getAllAssets, getAsset, updateAsset } = require('../controllers/assets');

router.post('/', createAsset);
router.get('/', getAllAssets);
router.patch('/', updateAsset);
router.get('/:id', getAsset);

module.exports = router;
