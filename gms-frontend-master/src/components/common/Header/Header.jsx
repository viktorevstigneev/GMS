import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => (
	<Fragment>
		<div className="header">
			<img className="header__logo" src="../../src/img/logo.png" />
			<nav className="header__havbar">
				<ul className="header__menu">
					<li className="header__item">
						<Link to="/profile" className="header__link">
							Profile
						</Link>
					</li>
					<li className="header__item">
						<Link to="/team" className="header__link">
							Team
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	</Fragment>
);

export default Header;
