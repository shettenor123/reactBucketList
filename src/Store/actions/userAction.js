import { actionTypes } from '../../Utils/constants'
const { user } = actionTypes

export const setAuth = (data) => {
    return {
        type: user.SET_AUTH,
        payload: data
    }
}
export const loginUser = (data) => {
    return {
        type: user.USER_LOGIN,
        payload: data
    }
}
export const loginUserPending = (data) => {
    return {
        type: user.USER_LOGIN_PENDING,
        payload: data
    }
}
export const loginUserSuccess = (data) => {
    return {
        type: user.USER_LOGIN_SUCCESS,
        payload: data
    }
}
export const loginUserError = (data) => {
    return {
        type: user.USER_LOGIN_ERROR,
        payload: data
    }
}

export const registerUser = (data) => {
    return {
        type: user.USER_REGISTER,
        payload: data
    }
}
export const registerUserPending = (data) => {
    return {
        type: user.USER_REGISTER_PENDING,
        payload: data
    }
}
export const registerUserSuccess = (data) => {
    return {
        type: user.USER_REGISTER_SUCCESS,
        payload: data
    }
}
export const registerUserError = (data) => {
    return {
        type: user.USER_REGISTER_ERROR,
        payload: data
    }
}
/* LOGOUT */
export const logOutUser = (data) => {
    return {
        type: user.USER_LOGOUT,
        payload: data
    }
}
export const logOutUserPending = (data) => {
    return {
        type: user.USER_LOGOUT_PENDING,
        payload: data
    }
}
export const logOutUserSuccess = (data) => {
    return {
        type: user.USER_LOGOUT_SUCCESS,
        payload: data
    }
}
export const logOutUserError = (data) => {
    return {
        type: user.USER_LOGOUT_ERROR,
        payload: data
    }
}