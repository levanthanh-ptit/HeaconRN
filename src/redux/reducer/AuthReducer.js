import * as ActionTypes from '../actions/ActionTypes';
const initialState = {
  token: null,
  signinStatus: '',
  signupStatus: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SIGNUP_START:
      return {
        ...state,
        signupStatus: 'loading'
      };
    case ActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        signupStatus: 'success',
      };
    case ActionTypes.SIGNUP_FAIL:
      return {
        ...state,
        signupStatus: 'fail',
      };
    case ActionTypes.SIGNUP_RESET:
      return {
        ...initialState
      };
    case ActionTypes.SIGNIN_START:
      return {
        ...state,
        signinStatus: 'loading',
      };
    case ActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        signinStatus: 'success',
      };
    case ActionTypes.SIGNIN_FAIL:
      return {
        ...state,
        token: null,
        signinStatus: 'fail',
      };
    case ActionTypes.SIGNIN_RESET:
      return {
        ...initialState
      };
    case ActionTypes.SIGNIN_SESSION:
      return {
        ...state,
        token: action.token,
        signinStatus: 'success',
      };
    default:
      return state
  }
};
