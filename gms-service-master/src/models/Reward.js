const { Schema, model } = require('mongoose');

const RewardSchema = new Schema({
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	image: {
		type: String,
	},
});

const Reward = model('Reward', RewardSchema);

const createReward = (data) => {
	return Reward.create(data);
};
const getReward = (id) => {
	return Reward.findOne({ _id: id });
};

const deleteReward = (id) => {
	return Reward.deleteOne({ _id: id });
};

const updateReward = (id, data) => {
	return Reward.updateOne({ _id: id }, { ...data });
};

module.exports = {
	createReward,
	getReward,
	deleteReward,
	updateReward,
	Reward,
};
