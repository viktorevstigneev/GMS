const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
	name: {
		type: String,
	},
	surname: {
		type: String,
	},
	username: {
		type: String,
		unique: true,
	},
	password: {
		type: String,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
	birthday: {
		type: Date,
		default: Date.now(),
	},
	position: {
		type: String,
	},
	avatar: {
		type: String,
	},
	englishLevel: {
		type: String,
		enum: ['BEGGINER', 'PRE_INTERMEDIATE', 'INTERMEDIATE', 'UPPER_INTERMEDIATE', 'ADVANCED', 'PROFICIENCY', 'NATIVE'],
	},
	office: {
		type: String,
	},
	room: {
		type: String,
	},
	team: { type: Schema.Types.ObjectId, ref: 'Team' },
	skills: [{ type: Schema.Types.ObjectId, ref: 'Skill' }],
});

const User = model('User', UserSchema);

const createUser = (data) => {
	return User.create(data);
};

const getUser = (userName) => {
	return User.findOne({ name: userName });
};

const deleteUser = (id) => {
	return User.deleteOne({ _id: id });
};

const updateUser = (id, data) => {
	return User.updateOne({ _id: id }, { ...data });
};

module.exports = {
	createUser,
	getUser,
	deleteUser,
	updateUser,
	User,
};
