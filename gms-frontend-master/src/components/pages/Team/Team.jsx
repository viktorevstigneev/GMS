import React, { useCallback, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../../common/Header';
import Footer from '../../common/Footer';

import './style.css';

const Team = ({ loadTeamData, team }) => {
	useEffect(() => {
		loadTeamData();
	}, []);

	const renderTeamMembers = useCallback(
		() =>
			team.data.members &&
			team.data.members.map((member) => (
				<li className="member" key={member.id + 1}>
					<Link to={`profile/${+member.id + 1}`}>
						<img className="member__image" src={member.personalData.avatar} alt="Photo CEO" />
						<div className="member__description">
							<h3 className="member__name">{`${member.personalData.surname} ${member.personalData.name}`}</h3>
						</div>
					</Link>
				</li>
			)),
		[team.data.members]
	);

	return (
		<Fragment>
			<Header />
			<div className="team">
				<div className="team__container">
					<div className="team__caption">
						<img className="team__logo" src={team.data.logo} alt="team logo" />

						<p className="team__text">was fouded: {team.data.date}</p>
						<p className="team__text">amount of achievements: {team.data.achievements}</p>
						<button className="team__button">Fractions</button>
					</div>
					<div className="team__content">
						<div className="team__header">
							<div className="team__text-wrapper">
								<h2 className="team__name">{team.data.name}</h2>
								<p className="team__description">{team.data.description}</p>
							</div>

							<Link className="team__link" to="/edit-team">
								Edit team
							</Link>
						</div>
						<ul className="team__list">{renderTeamMembers()}</ul>
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

Team.propTypes = {
	team: PropTypes.object,
	loadTeamData: PropTypes.func,
};

Team.defaultProps = {
	team: {},
	loadTeamData: () => {},
};
export default Team;
