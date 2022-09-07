import axios from 'axios';
import { put, call } from 'redux-saga/effects';

import { loadProfileDataFailed, loadProfileDataSuccess } from '../actions/loadProfileData/loadProfileData';
import { loadTeamDataFailed, loadTeamDataSuccess } from '../actions/loadTeamData/loadTeamData';
import { loadTasksDataFailed, loadTasksDataSuccess } from '../actions/loadTasksdata/loadTasksData';
import { loadHonorsDataFailed, loadHonorsDataSuccess } from '../actions/loadHonorsData/loadHonorsData';
import { API_URL } from '../constants';

export function* loadProfileData(action) {
	try {
		const responseData = yield call(() => axios.get(`${API_URL}/users/${action.id}`).then((response) => response.data));
		yield put(loadProfileDataSuccess(responseData));
	} catch (error) {
		yield put(loadProfileDataFailed(error));
	}
}

export function* loadTeamData() {
	try {
		const responseData = yield call(() => axios.get(`${API_URL}/all`).then((response) => response.data));
		yield put(loadTeamDataSuccess(responseData[0]));
	} catch (error) {
		yield put(loadTeamDataFailed(error));
	}
}

export function* loadTasksData() {
	try {
		const responseData = yield call(() => axios.get(`${API_URL}/tasks`).then((response) => response.data));
		yield put(loadTasksDataSuccess(responseData));
	} catch (error) {
		yield put(loadTasksDataFailed(error));
	}
}

export function* loadHonorsData() {
	try {
		const responseData = yield call(() => axios.get(`${API_URL}/honors`).then((response) => response.data));
		yield put(loadHonorsDataSuccess(responseData));
	} catch (error) {
		yield put(loadHonorsDataFailed(error));
	}
}
