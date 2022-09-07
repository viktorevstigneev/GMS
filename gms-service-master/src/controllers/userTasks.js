const { HttpStatusCode } = require('../constants');
const { addUserTask, getUserTasks, deleteUserTask, updateUserTask } = require('../models/UserTasks');

const handleAddUserTask = async (req, res) => {
	try {
		const result = await addUserTask(req.body);

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleGetUserTask = async (req, res) => {
	try {
		const result = await getUserTasks(req.body.id);

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleDeleteUserTask = async (req, res) => {
	try {
		const result = await deleteUserTask(req.body.id);

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleUpdateUserTask = async (req, res) => {
	try {
		const result = await updateUserTask(req.body.id, req.body);

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

module.exports = {
	handleAddUserTask,
	handleGetUserTask,
	handleDeleteUserTask,
	handleUpdateUserTask,
};
