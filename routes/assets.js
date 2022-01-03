const router = require('express').Router();

const { createAsset, getAllAssets } = require('../controllers/assets');

router.post('/', createAsset);
router.get('/', getAllAssets);

module.exports = router;
