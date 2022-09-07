const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const passport = require('passport');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const initPassport = require('./passport/init');

const { APP_PORT } = require('./config');
const router = require('./routes/index');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.raw());

// auth

app.use(cookieParser());
app.use(
	expressSession({
		secret: 'top_secret',
		resave: true,
		saveUninitialized: true,
	})
);

app.use(passport.initialize());
app.use(passport.session());

initPassport(passport);

app.use(router);

const startServer = async () => {
	try {
		mongoose.connect(
			'mongodb+srv://viktar:qawsed@maindb.fx1te.mongodb.net/MainDb?retryWrites=true&w=majority',
			(error) => {
				if (error) {
					console.log('some error happened', error);
				}
				console.log('mongoDB has been connected successfully');
			}
		);

		app.listen(APP_PORT, () => {
			console.info(`server started on port ${APP_PORT}!`);
		});
	} catch (error) {
		console.log(`the ${error} happend with server`);
		console.log(`it means ${error.message}`);
	}
};

startServer();
