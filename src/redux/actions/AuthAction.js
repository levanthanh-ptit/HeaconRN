var constant = require('../../../static/constant');
import AsyncStorage from '@react-native-community/async-storage';
import * as ATs from '../actions/ActionTypes';
import { awaitExpression } from '@babel/types';

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
    type: ATs.SIGNIN_FAIL,
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
    return async dispatch => {
        await dispatch(signInStart());
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
        let res = await fetch(constant.server + '/login', option)
        if (res.status == 200) {
            let resJson = await res.json()
            console.log(resJson);

            await dispatch(await signInSuccess(resJson.token));
            await AsyncStorage.setItem('token', await resJson.token);
        }
        else {
            await dispatch(signInFail());
        }
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
        AsyncStorage.removeItem('token')
    }
}