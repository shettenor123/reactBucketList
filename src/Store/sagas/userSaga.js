import { put, takeLatest, call, delay, select, fork, all } from "redux-saga/effects";
import Cookies from 'js-cookie'
import { actionTypes } from '../../Utils/constants'
import {
    registerUserPending,
    registerUserSuccess,
    registerUserError,

    loginUserPending,
    loginUserError,
    loginUserSuccess,

    logOutUserError,
    logOutUserPending,
    logOutUserSuccess
} from '../actions/userAction'

import {
    userRegisterApi,
    loginApi,
    logoutApi
} from '../../Utils/api/api'

import history from '../../Utils/history'
// import { useHistory } from 'react-router-dom'

const { user } = actionTypes;
// let history = useHistory();

/**
 * post rfp
 */
function* userRegisterSaga(action) {
    try {
        yield put(registerUserPending(true));
        const res = yield call(userRegisterApi, action.payload);
        console.log("🚀 ~ file: userSaga.js ~ line 37 ~ function*userRegisterSaga ~ res", res)
        if (res.success) {
            Cookies.set('Access-Token', res.data.token)
            yield put(registerUserSuccess(res.data));
            history.push('/tasks')
        } else {
            alert(res.data.message)
            yield put(registerUserError(res));
        }
    } catch (err) {
        yield put(registerUserError(err));
    }
}

/**
 * login
 */
function* loginSaga(action) {
    try {
        yield put(loginUserPending(true));
        const res = yield call(loginApi, action.payload);
        if (res.success) {
            yield put(loginUserSuccess(res.data));
            Cookies.set('Access-Token', res.data.token)
            history.push('/tasks')
        } else {
            if (res && res.data && res.data.message)
                alert(res && res.data && res.data.message)
            yield put(loginUserError(res));
        }
    } catch (err) {
        yield put(loginUserError(err));
    }
}

/**
 * logout
 */
function* logoutSaga(action) {
    try {
        yield put(logOutUserPending(true));
        const res = yield call(logoutApi, action.payload);
        if (res.success) {
            yield put(logOutUserSuccess(res.data));
            Cookies.remove("Access-Token")
            history.push('/signin')
        } else {
            yield put(logOutUserError(res));
        }
    } catch (err) {
        yield put(logOutUserError(err));
    }
}

/*
  
  ACTION WATCHERS
  
  */

export function* userRegisterWatcher() {
    yield takeLatest(user.USER_REGISTER, userRegisterSaga);
}
export function* loginWatcher() {
    yield takeLatest(user.USER_LOGIN, loginSaga);
}
export function* logoutWatcher() {
    yield takeLatest(user.USER_LOGOUT, logoutSaga);
}