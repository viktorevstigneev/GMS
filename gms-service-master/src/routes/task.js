const express = require('express');
const {
	handleAddTask,
	handleGetTask,
	handleGetAllTasks,
	handleDeleteTask,
	handleUpdateTask,
} = require('../controllers/task');

const router = express();

router.post('/task', handleAddTask);
router.get('/task/:id', handleGetTask);
router.get('/task', handleGetAllTasks);
router.delete('/task', handleDeleteTask);
router.patch('/task', handleUpdateTask);

module.exports = router;
