import React from 'react';
import PropTypes from 'prop-types';

import { TaskStatus } from '../../../constants';
import './style.css';

const TaskInfo = ({ tasks, taskId }) => {
	let findedTask;
	if (tasks.data) {
		findedTask = tasks.data.find((item) => item.id === taskId);
	}

	const renderSubtasks = () =>
		findedTask?.subtasks.map((subtask, index) => (
			<li className="subtasks__item" key={index}>
				<p>{subtask.name}</p>
				<p>{subtask.description}</p>
				<p
					className={`${subtask.status === TaskStatus.DONE ? 'subtasks__item--possitive' : 'subtasks__item--negative'}`}
				>
					{subtask.status}
				</p>
			</li>
		));

	return (
		<div className="tasks__wrapper">
			<div className="tasks__head">
				<h2 className="tasks__title">{findedTask?.title}</h2>
				<button className="tasks__button">Delete</button>
			</div>
			<div className="tasks__main">
				<img className="tasks__image" src={findedTask?.image} alt="task image" />
				<p className="tasks__description">{findedTask?.description}</p>
			</div>
			<div className="tasks__footer">
				<div className="tasks__deadline">
					<p className="tasks__deadline-title">Deadline</p>
					<p className="tasks__deadline-time">{findedTask?.deadline.slice(0, 10)}</p>
				</div>
				<div className="subtasks">
					<h2 className="tasks__title"> subtasks</h2>
					<ul className="subtasks__list">{renderSubtasks()}</ul>
					<progress
						className="tasks__progress"
						value={findedTask?.subtasks.filter((task) => task.status === TaskStatus.DONE).length}
						max={findedTask?.subtasks.length}
					/>
				</div>
			</div>
			<p className="tasks__reward">{findedTask?.rewards}</p>
		</div>
	);
};

TaskInfo.propTypes = {
	tasks: PropTypes.object,
	taskId: PropTypes.string,
};

TaskInfo.defaultProps = {
	tasks: {},
	taskId: '',
};

export default TaskInfo;
