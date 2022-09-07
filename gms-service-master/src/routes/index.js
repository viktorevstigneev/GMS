const express = require('express');

const user = require('./user');
const reward = require('./reward');
const subTask = require('./subTask');
const task = require('./task');
const userTasks = require('./userTasks');

const router = express();

router.use(user);
router.use(reward);
router.use(subTask);
router.use(task);
router.use(userTasks);

module.exports = router;
