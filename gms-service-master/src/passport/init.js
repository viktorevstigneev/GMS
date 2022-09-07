const { User } = require('../models/User');
const { signIn } = require('./signIn');
const { signUp } = require('./signUp');

module.exports = (passport) => {
	passport.serializeUser((user, done) => {
		done(null, user._id);
	});

	passport.deserializeUser((id, done) => {
		User.findById(id, (err, user) => {
			done(err, user);
		});
	});

	signIn(passport);
	signUp(passport);
};
