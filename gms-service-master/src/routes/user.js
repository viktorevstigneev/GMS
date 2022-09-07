const express = require('express');
const {
	handleAddUser,
	handleDeleteUser,
	handleUpdateUser,
	handleSignIn,
	handleSignUp,
	handleLogOut,
} = require('../controllers/user');
const isAuthenticated = require('../utils/isAuthenticated');

const router = express();

router.post('/profile', isAuthenticated, handleAddUser);
router.delete('/profile', handleDeleteUser);
router.patch('/profile', handleUpdateUser);

// auth

router.post('/signin', handleSignIn);
router.post('/signup', handleSignUp);
router.post('/logout', handleLogOut);

module.exports = router;
