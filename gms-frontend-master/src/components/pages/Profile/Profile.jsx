import React, { useEffect, useState, useCallback, Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import ModalWindow from '../../common/ModalWindow';
import ProfileTaskList from '../../common/ProfileTasksList';
import './style.css';

import { POPUP_OVERLAY_CLASSNAME } from '../../../constants';
import ProfileHonorsList from '../../common/ProfileHonorsList/ProfileHonorsList';

const Profile = ({ profile, honors, loadProfileData, loadHonorsData, match }) => {
	useEffect(() => {
		loadProfileData(match.params.id);
		loadHonorsData();
	}, [match.params.id]);

	const achievementsList = honors.data.filter((item) => !item.isRewards);
	const rewardsList = honors.data.filter((item) => item.isRewards);

	const [isPopupOpen, setPopupOpen] = useState(false);

	const handleSpendButtonClick = useCallback((evt) => {
		evt.preventDefault();
		setPopupOpen(true);
	});

	const handleModalWindowCloseButtonClick = useCallback((evt) => {
		evt.preventDefault();
		setPopupOpen(false);
	}, []);

	const handleModalWindowOverlayClick = useCallback((evt) => {
		if (evt.target.classList.contains(POPUP_OVERLAY_CLASSNAME)) {
			setPopupOpen(false);
		}
	}, []);

	const renderProfileInfo = useCallback(
		() =>
			profile.data.info &&
			profile.data.info.map((item) => (
				<li className="profile__info" key={item.id}>
					<p className="profile__caption">{item.name}</p>
					<p className="profile__mark">{item.value}</p>
				</li>
			)),
		[profile.data.info]
	);

	const renderProfileSkills = useCallback(
		() =>
			profile.data.skills &&
			profile.data.skills.map((item) => (
				<li className="profile__skills-item" key={item.id}>
					<img className="profile__skills-icon" src={item.url} alt={item.name} />
					<p className="profile__skills-name">{item.name}</p>
				</li>
			)),
		[profile.data.skills]
	);

	const renderRewardsList = useCallback(
		() => (
			<ul className="rewards__list">
				{profile.data.rewards.map((reward) => (
					<li className="rewards__item" key={reward.id}>
						<div className="rewards__description">
							<img className="rewards__icon" src={reward.icon} alt={reward.name} />
							<p className="rewards__name">{reward.name}</p>
						</div>
						<button className="rewards__get-button">
							Get for
							<span className="rewards__price rewards__price--positive"> {reward.price}$</span>
						</button>
					</li>
				))}
			</ul>
		),
		[profile.data.rewards]
	);

	return (
		<Fragment>
			<Header />
			<div className="profile">
				<div className="profile__header">
					<img className="profile__avatar" src={profile.data.avatar} alt="profile avatar" />
					<div className="profile__block">
						<div className="header__text">
							<h2 className="profile__fullname">{`${profile.data?.surname} ${profile.data?.name}`}</h2>
							<p className="profile__position">{profile.data?.position}</p>
						</div>
					</div>
				</div>
				<div className="profile__content">
					<div className="profile__content-left">
						<div className="profile__tasks">
							{isPopupOpen && (
								<ModalWindow
									title="rewards"
									onCloseButtonClick={handleModalWindowCloseButtonClick}
									onOverlayClick={handleModalWindowOverlayClick}
								>
									{renderRewardsList()}
								</ModalWindow>
							)}
							<h3 className="profile__tasks-title">Tasks</h3>
							<ProfileTaskList memberId={match.params.id} />
							<p className="profile__money">${profile.data?.money}</p>
							<button className="profile__button" onClick={handleSpendButtonClick}>
								Spend
							</button>
						</div>
						<p className="profile__title">Achievements</p>
						<ProfileHonorsList honorsList={achievementsList} profile={profile} />
						<p className="profile__title">Rewards</p>
						<ProfileHonorsList honorsList={rewardsList} profile={profile} />
					</div>

					<div className="profile__content-right">
						<div className="profile__info-block">
							<h3 className="profile__info-title">Information</h3>
							<ul className="profile__info-list">{renderProfileInfo()}</ul>
						</div>
						<div className="profile__skills">
							<h3 className="profile__skills-title">Skills</h3>
							<ul className="profile__skills-list">{renderProfileSkills()}</ul>
						</div>
						<button className="profile__button">Edit profile</button>
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

Profile.propTypes = {
	profile: PropTypes.object,
	honors: PropTypes.object,
	loadProfileData: PropTypes.func,
	loadHonorsData: PropTypes.func,
	match: PropTypes.object,
};

Profile.defaultProps = {
	profile: {},
	honors: {},
	loadProfileData: () => {},
	loadHonorsData: () => {},
	match: {},
};

export default Profile;
