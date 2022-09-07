const { Schema, model } = require('mongoose');

const SkillSchema = new Schema({
	name: {
		type: String,
	},
	image: {
		type: String,
	},
});

const Skill = model('Skill', SkillSchema);

const createSkill = (data) => {
	return Skill.create(data);
};

const getSkillData = (id) => {
	return Skill.findOne({ _id: id });
};

const deleteSkill = (id) => {
	return Skill.deleteOne({ _id: id });
};

const updateSkill = (id, data) => {
	return Skill.updateOne({ _id: id }, { ...data });
};


module.exports = {
	createSkill,
	getSkillData,
	deleteSkill,
	updateSkill,
	Skill,
};

