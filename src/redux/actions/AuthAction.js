var constant = require('../../../static/constant');
import { AsyncStorage } from 'react-native';
import * as ATs from '../actions/ActionTypes';

export const signUpStart = () => ({
    type: ATs.SIGNUP_START,
})
export const signUpSuccess = () => ({
    type: ATs.SIGNUP_SUCCESS,
})
export const signUpFail = () => ({
    type: ATs.SIGNUP_FAIL,
})
export const signUpReset = () => ({
    type: ATs.SIGNUP_RESET,
})
export const signInStart = () => ({
    type: ATs.SIGNIN_START,
})
export const signInSuccess = (token) => ({
    type: ATs.SIGNIN_SUCCESS,
    token: token,
})
export const signInFail = () => ({
    type: ATs.SIGNUP_FAIL,
})
export const signInReset = () => ({
    type: ATs.SIGNIN_RESET,
})
export const signInSession = (token) => ({
    type: ATs.SIGNIN_SESSION,
    token: token
})
export const signUp = (userName, password, firstName, lastName, birthday, gender) => {
    return dispatch => {
        dispatch(signUpStart());
        let option = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: userName,
                password: password,
                gender: gender,
                firstName: firstName,
                lastName: lastName,
                birthday: birthday,
            }),
        }

        fetch(constant.server + '/signup', option).then(res => {
            dispatch(signUpSuccess());

        }).catch(error => {
            dispatch(signUpFail());
        })
    }
}
export const signIn = (userName, password) => {
    return dispatch => {
        dispatch(signInStart());
        let option = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: userName,
                password: password,
            }),
        }
        fetch(constant.server + '/login', option)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                dispatch(signInSuccess(res.token));
                AsyncStorage.setItem('token', res.token);
            }).catch(error => {
                dispatch(signInFail());
            })
    }
}
export const sessionSignIn = (token) => {
    return dispatch => { 
        dispatch(signInSession(token))
    }
}
export const logOut = () => {
    return dispatch => { 
        dispatch(signInReset())
    }
}