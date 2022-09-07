import { LOAD_TEAM_DATA, LOAD_TEAM_DATA_FAILED, LOAD_TEAM_DATA_SUCCESS } from '../../constants';

const loadTeamData = () => ({
	type: LOAD_TEAM_DATA,
});

export const loadTeamDataFailed = (error) => ({
	type: LOAD_TEAM_DATA_FAILED,
	payload: error,
});

export const loadTeamDataSuccess = (data) => ({
	type: LOAD_TEAM_DATA_SUCCESS,
	payload: data,
});

export default loadTeamData;
