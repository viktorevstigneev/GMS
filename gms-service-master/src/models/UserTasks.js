const { Schema, model } = require('mongoose');

const UserTasksSchema = new Schema({
	taskId: {
		type: Schema.Types.ObjectId,
		ref: 'Task',
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

const UserTask = model('UserTasks', UserTasksSchema);

const addUserTask = (data) => {
	return UserTask.create(data);
};

const getUserTasks = (id) => {
	return UserTask.find({ userId: id });
};

const deleteUserTask = (id) => {
	return UserTask.deleteOne({ _id: id });
};

const updateUserTask = (id, data) => {
	return UserTask.updateOne({ _id: id }, { ...data });
};

module.exports = {
	addUserTask,
	getUserTasks,
	deleteUserTask,
	updateUserTask,
	UserTask,
};
