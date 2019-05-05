import * as ActionTypes from '../actions/ActionTypes'

const initialState = {
    friend: [],
    status: '',
}

export default (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.FRIENDS_START:
            return {
                ...state,
                status: 'loading',
            };
        case ActionTypes.FRIENDS_SUCCESS:
            return {
                ...state,
                status: 'success',
                friend: [...state.friend, ...action.friend]
            };
        case ActionTypes.FRIENDS_FAIL:
            return {
                friend: [],
                status: 'fail',
            };
        default:
            return state
    }
};
