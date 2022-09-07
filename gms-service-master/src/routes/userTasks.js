const express = require('express');
const {
	handleAddUserTask,
	handleGetUserTask,
	handleDeleteUserTask,
	handleUpdateUserTask,
} = require('../controllers/userTasks');

const router = express();

router.post('/user-task', handleAddUserTask);
router.get('/user-task', handleGetUserTask);
router.delete('/user-task', handleDeleteUserTask);
router.patch('/user-task', handleUpdateUserTask);

module.exports = router;
