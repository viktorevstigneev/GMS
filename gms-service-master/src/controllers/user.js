const passport = require('passport');

const { HttpStatusCode } = require('../constants');
const { User, createUser, deleteUser, updateUser } = require('../models/User');

const handleAddUser = async (req, res) => {
	try {
		const result = await createUser(req.body);

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleDeleteUser = async (req, res) => {
	try {
		const result = await deleteUser(req.body.id);

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleUpdateUser = async (req, res) => {
	try {
		const result = await updateUser(req.body.id, req.body);

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleSignIn = (req, res, next) => {
	passport.authenticate('signin', (err, user) => {
		if (err) return next(err);

		if (!user) {
			res.status(HttpStatusCode.UNAUTHORIZED).send({ error: 'Невернй логин или пароль' });
		}

		req.logIn(user, (err) => {
			if (err) return next(err);

			res.send(user);
		});
	})(req, res, next);
};

const handleSignUp = (req, res, next) => {
	passport.authenticate('signup', (err, user) => {
		if (err) return next(err);

		if (!user) {
			res.status(HttpStatusCode.UNAUTHORIZED).send({ error: 'Пользователь с таким email уже существует' });
		}

		req.logIn(user, (err) => {
			if (err) return next(err);

			res.send(user);
		});
	})(req, res, next);
};

const handleLogOut = (req, res) => {
	req.logout();
	res.status(HttpStatusCode.OK).send({ message: 'Вы вышли' });
};

module.exports = {
	handleAddUser,
	handleDeleteUser,
	handleUpdateUser,
	handleSignIn,
	handleSignUp,
	handleLogOut,
};
