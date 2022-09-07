const { HttpStatusCode } = require('../constants');
const { createSubTask, getSubTask, deleteSubTask, updateSubTask } = require('../models/SubTask');

const handleAddSubTask = async (req, res) => {
	try {
		const result = await createSubTask(req.body);

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleGetSubTask = async (req, res) => {
	try {
		const result = await getSubTask(req.body.id);

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleDeleteSubTask = async (req, res) => {
	try {
		const result = await deleteSubTask(req.body.id);

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleUpdateSubTask = async (req, res) => {
	try {
		const result = await updateSubTask(req.body.id, req.body);

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

module.exports = {
	handleAddSubTask,
	handleGetSubTask,
	handleDeleteSubTask,
	handleUpdateSubTask,
};
