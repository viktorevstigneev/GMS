const { Schema, model } = require('mongoose');

const UserRewardSchema = new Schema({
	rewardId: {
		type: Schema.Types.ObjectId,
		ref: 'Reward',
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

module.exports = model('UserReward', UserRewardSchema);
