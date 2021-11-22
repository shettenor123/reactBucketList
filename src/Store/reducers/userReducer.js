import { actionTypes } from '../../Utils/constants'
const { user } = actionTypes

const initialState = {
    register: {
        register: {},
        pending: false,
        success: false,
        error: false
    },
    profile: {
        profile: {},
        pending: false,
        success: false,
        error: false,

    },
    hasAccess: false
};
const User = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {

        case user.SET_AUTH:
            return {
                ...state,
                hasAccess: true

            }
        case user.USER_REGISTER_PENDING:
            return {
                ...state,
                register: {
                    // register: payload,
                    pending: true,
                    success: false,
                    error: false

                }

            }
        case user.USER_REGISTER_SUCCESS:
            return {
                ...state,
                register: {
                    register: payload,
                    pending: false,
                    success: true,
                    error: false
                },
                hasAccess: true
            }

        case user.USER_REGISTER_ERROR:
            return {
                ...state,
                register: {
                    // register: payload,
                    pending: false,
                    success: false,
                    error: true
                }
            }

        case user.USER_LOGIN_PENDING:
            return {
                ...state,
                profile: {
                    // profile: payload,
                    pending: true,
                    success: false,
                    error: false,

                }

            }
        case user.USER_LOGIN_SUCCESS:
            return {
                ...state,
                profile: {
                    profile: payload,
                    pending: false,
                    success: true,
                    error: false,
                },
                hasAccess: true
            }

        case user.USER_LOGIN_ERROR:
            return {
                ...state,
                profile: {
                    // profile: payload,
                    pending: false,
                    success: false,
                    error: true,
                }
            }

        /* LOGOUT */
        case user.USER_LOGOUT_PENDING:
            return {
                ...state,
                profile: {
                    // profile: payload,
                    pending: true,
                    success: false,
                    error: false
                }

            }
        case user.USER_LOGOUT_SUCCESS:
            return {
                ...state,
                profile: {
                    profile: {},
                    pending: false,
                    success: true,
                    error: false,
                },
                hasAccess: false
            }

        case user.USER_LOGOUT_ERROR:
            return {
                ...state,
                profile: {
                    // profile: payload,
                    pending: false,
                    success: false,
                    error: true
                }
            }
        default:
            return state;
    }
}
export default User