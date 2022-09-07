const { Schema, model } = require('mongoose');

const UserAchievementsSchema = new Schema({
	achievementId: {
		type: Schema.Types.ObjectId,
		ref: 'Reward',
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'Reward',
	},
});

module.exports = model('UserAchievements', UserAchievementsSchema);
