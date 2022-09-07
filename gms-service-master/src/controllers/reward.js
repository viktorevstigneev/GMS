const { HttpStatusCode } = require('../constants');
const { createReward, getReward, deleteReward, updateReward } = require('../models/Reward');

const handleAddReward = async (req, res) => {
	try {
		const result = await createReward(req.body);

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleGetReward = async (req, res) => {
	try {
		const result = await getReward(req.body.id);

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleDeleteReward = async (req, res) => {
	try {
		const result = await deleteReward(req.body.id);

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleUpdateReward = async (req, res) => {
	try {
		const result = await updateReward(req.body.id, req.body);

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

module.exports = {
	handleAddReward,
	handleGetReward,
	handleDeleteReward,
	handleUpdateReward,
};
