import { SET_COMPLETE } from '../constants';

export default (state = [], action) => {
	switch(action.type) {
		case SET_COMPLETE:
			const { completeGoals } = action;
			return completeGoals;
		default:
			return state;
	}
}