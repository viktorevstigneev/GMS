const express = require('express');
const {
	handleAddSubTask,
	handleGetSubTask,
	handleDeleteSubTask,
	handleUpdateSubTask,
} = require('../controllers/subTask');

const router = express();

router.post('/subtask', handleAddSubTask);
router.get('/subtask', handleGetSubTask);
router.delete('/subtask', handleDeleteSubTask);
router.patch('/subtask', handleUpdateSubTask);

module.exports = router;
