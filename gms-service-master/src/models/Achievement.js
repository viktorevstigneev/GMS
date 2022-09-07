const { Schema, model } = require('mongoose');

const AchievementSchema = new Schema({
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

const Achievement = model('Achievement', AchievementSchema);

const createAchievement = (data) => {
	return Achievement.create(data);
};

const getAchievement = (id) => {
	return Achievement.findOne({ _id: id });
};

const deleteAchievement = (id) => {
	return Achievement.deleteOne({ _id: id });
};

const updateAchievement = (id, data) => {
	return Achievement.updateOne({ _id: id }, { ...data });
};

module.exports = {
	createAchievement,
	getAchievement,
	deleteAchievement,
	updateAchievement,
	Achievement,
};
