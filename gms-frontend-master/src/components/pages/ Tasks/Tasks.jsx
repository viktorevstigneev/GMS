import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import TaskInfo from '../../common/TaskInfo';
import './style.css';

const Tasks = ({ loadTasksData, match, tasks }) => {
	useEffect(() => {
		loadTasksData();
	}, []);

	const [currentTaskId, setCurrentTaskId] = useState('1');
	const [isAddTaskFormShow, setAddTaskFromShow] = useState(false);
	const [teamLogo, setTeamLogo] = useState();

	const handleTaskClick = (evt) => {
		setAddTaskFromShow(false);
		setCurrentTaskId(evt.currentTarget.dataset.id);
	};

	const renderTasksList = () =>
		tasks.data &&
		tasks.data.map(
			(item) =>
				item.userId === match.params.id && (
					<li className="tasks__item" data-id={item.id} key={item.id} onClick={handleTaskClick}>
						<p className="tasks__name">{item.title}</p>
					</li>
				)
		);

	const showNewTaskForm = () => (
		<form className="tasks__wrapper">
			<div className="tasks__head">
				<input className="tasks__input" placeholder="task name" />
				<button className="tasks__button">Ok</button>
			</div>
			<div className="tasks__main">
				<label className="tasks__label" htmlFor="logoUpload">
					<img className="tasks__logo" src={teamLogo} alt="task picture" />
					<input
						className="tasks__upload-input"
						id="logoUpload"
						type="file"
						onChange={(evt) => setTeamLogo(URL.createObjectURL(evt.target.files[0]))}
					/>
				</label>

				<textarea className="tasks__description" placeholder="task description" />
			</div>
			<div className="tasks__footer">
				<div className="tasks__deadline">
					<p className="tasks__deadline-title">Deadline</p>
					<input className="tasks__input" type="date" />
				</div>
				<div className="sabtasks">
					<input className="tasks__input" placeholder="subtask name" />
					<button className="tasks__button">Add subtask</button>
				</div>
			</div>

			<span className="tasks__reward">reward</span>
			<select className="tasks__select" placeholder="reward">
				<option value=""></option>
			</select>
		</form>
	);

	return (
		<Fragment>
			<Header />
			<div className="tasks">
				<div className="tasks__list-wrapper">
					<ul className="tasks__list">{renderTasksList()}</ul>
					<button
						className="tasks__button"
						onClick={() => {
							setAddTaskFromShow(true);
						}}
					>
						Add new task
					</button>
				</div>

				<div className="tasks__content">
					{isAddTaskFormShow ? showNewTaskForm() : <TaskInfo taskId={currentTaskId} />}
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

Tasks.propTypes = {
	tasks: PropTypes.object,
	loadTasksData: PropTypes.func,
	match: PropTypes.object,
};

Tasks.defaultProps = {
	tasks: {},
	loadTasksData: () => {},
	match: {},
};

export default Tasks;
