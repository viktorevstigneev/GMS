const express = require('express');
const { handleAddReward, handleGetReward, handleDeleteReward, handleUpdateReward } = require('../controllers/reward');

const router = express();

router.post('/reward', handleAddReward);
router.get('/reward', handleGetReward);
router.delete('/reward', handleDeleteReward);
router.patch('/reward', handleUpdateReward);

module.exports = router;
