import React, { useCallback, useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import ModalWindow from '../../common/ModalWindow';
import PersonalInfo from '../../common/HonorsInfo';

import { POPUP_OVERLAY_CLASSNAME } from '../../../constants';

import './style.css';

const TeamEditor = ({ loadTeamData, team }) => {
	useEffect(() => {
		loadTeamData();
	}, []);

	const [createTimeValue, setCreateTimeValue] = useState(team.data.date);
	const [achievementsAmountValue, setAchievementsAmountValue] = useState(team.data.achievements);
	const [teamNameValue, setTeamNameValue] = useState(team.data.name);
	const [teamDescriptionValue, setTeamDescritptionValue] = useState(team.data.description);
	const [teamLogo, setTeamLogo] = useState(team.data.logo);
	const [isAddMemberPopupOpen, setMemberPopupOpen] = useState(false);

	const handleModalWindowOverlayClick = useCallback((evt) => {
		if (evt.target.classList.contains(POPUP_OVERLAY_CLASSNAME)) {
			setMemberPopupOpen(false);
		}
	});

	const renderTeamMembers = useCallback(
		() =>
			team.data.members &&
			team.data.members.map((member) => (
				<li className="edit-team__member" key={member.id}>
					<button className="edit-team__member-delete-button">&times;</button>
					<img className="edit-team__member-image" src={member.personalData.avatar} alt="Member photo" />
					<div className="edit-team__member-description">
						<h3 className="edit-team__member-name">
							{member.personalData.surname} {member.personalData.name}
						</h3>
					</div>
					<Link className="edit-team__link" to={`tasks/${+member.id + 1}`}>
						Add task
					</Link>
				</li>
			)),
		[team.data.members]
	);

	return (
		<Fragment>
			<Header />
			<div className="edit-team">
				<form className="edit-team__form" action="" method="post">
					<div className="edit-team__container">
						<div className="edit-team__caption">
							<label className="edit-team__label" htmlFor="logoUpload">
								<img className="edit-team__logo" src={teamLogo} alt="team logo" />
							</label>
							<input
								className="edit-team__input edit-team__input--type-file"
								id="logoUpload"
								type="file"
								onChange={(evt) => setTeamLogo(URL.createObjectURL(evt.target.files[0]))}
							/>
							<p className="edit-team__inscription">
								was fouded:
								<input
									className="edit-team__input"
									type="date"
									value={createTimeValue}
									onChange={(evt) => setCreateTimeValue(evt.target.value)}
									placeholder="Foundation date"
								/>
							</p>
							<p className="edit-team__inscription">
								amount of achievements:{' '}
								<input
									className="edit-team__input"
									type="text"
									value={achievementsAmountValue}
									onChange={(evt) => setAchievementsAmountValue(evt.target.value)}
									placeholder="Amount of achievements"
								/>
							</p>
							<button className="edit-team__button edit-team__button--width">Add fraction</button>
							<PersonalInfo />
						</div>
						<div className="edit-team__content">
							<div className="edit-team__header">
								<fieldset className="edit-team__text">
									<input
										className="edit-team__input edit-team__input--font-size"
										type="text"
										value={teamNameValue}
										onChange={(evt) => setTeamNameValue(evt.target.value)}
										placeholder="Team name"
									/>
									<input
										className="edit-team__input"
										type="text"
										value={teamDescriptionValue}
										onChange={(evt) => setTeamDescritptionValue(evt.target.value)}
										placeholder="Team description"
									/>
								</fieldset>
								<input className="edit-team__button edit-team__button--save" type="submit" value="Save changes" />
							</div>
							<ul className="edit-team__list">
								{renderTeamMembers()}
								<li className="edit-team__member-item">
									<button
										className="edit-team__member-button"
										onClick={(evt) => {
											evt.preventDefault();
											setMemberPopupOpen((state) => !state);
										}}
									>
										+
									</button>
								</li>
							</ul>
							{isAddMemberPopupOpen && (
								<ModalWindow
									title="Add member"
									onCloseButtonClick={() => setMemberPopupOpen(false)}
									onOverlayClick={handleModalWindowOverlayClick}
								>
									<input type="text" className="edit-team__input" placeholder="Surname" />
									<input type="text" className="edit-team__input" placeholder="Name" />
								</ModalWindow>
							)}
						</div>
					</div>
				</form>
			</div>
			<Footer />
		</Fragment>
	);
};

TeamEditor.propTypes = {
	team: PropTypes.object,
	honors: PropTypes.object,
	loadTeamData: PropTypes.func,
	loadHonorsData: PropTypes.func,
};

TeamEditor.defaultProps = {
	team: {},
	honors: {},
	loadTeamData: () => {},
	loadHonorsData: () => {},
};
export default TeamEditor;
