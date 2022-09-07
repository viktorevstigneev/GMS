import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import Team from '../pages/Team';
import TeamEditor from '../pages/TeamEditor';
import Tasks from '../pages/ Tasks';
import './App.css';

const App = () => (
	<Switch>
		<Route path="/auth" component={SignIn} />
		<Route path="/profile/:id" component={Profile} />
		<Route path="/team" component={Team} />
		<Route path="/edit-team" component={TeamEditor} />
		<Route path="/tasks/:id" component={Tasks} />
		<Redirect to="/auth" />
	</Switch>
);

export default App;
