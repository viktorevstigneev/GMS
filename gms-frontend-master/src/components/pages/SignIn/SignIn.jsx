import React, { Fragment } from 'react';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './style.css';

const SignIn = () => (
	<Fragment>
		<Header />
		<div className="sign-in">
			<h3 className="sign-in__title">Sign In</h3>
			<form className="sign-in__form" action="">
				<label htmlFor="login">Login</label>
				<input className="sign-in__input" id="login" placeholder="Login" type="text" />
				<label htmlFor="password">Password</label>
				<input className="sign-in__input" id="password" placeholder="Password" type="password" />
				<button className="sign-in__button">Submit</button>
			</form>
		</div>
		<Footer />
	</Fragment>
);

export default SignIn;
