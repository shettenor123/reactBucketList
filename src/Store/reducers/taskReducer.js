import { actionTypes } from '../../Utils/constants'
const { task } = actionTypes

const initialState = {
    allTask: {
        task: [],
        pending: false,
        success: false,
        error: false
    },
    task: {
        task: {},
        pending: false,
        success: false,
        error: false
    },
    allBucketTask: {
        bucketTask: [],
        pending: false,
        success: false,
        error: false
    },
};
const Task = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {

        case task.GET_ALL_TASK_PENDING:
            return {
                ...state,
                allTask: {
                    pending: true,
                    success: false,
                    error: false
                }
            }
        case task.GET_ALL_TASK_SUCCESS:
            return {
                ...state,
                allTask: {
                    task: payload,
                    pending: false,
                    success: true,
                    error: false
                }
            }

        case task.GET_ALL_TASK_ERROR:
            return {
                ...state,
                allTask: {
                    // register: payload,
                    pending: false,
                    success: false,
                    error: true
                }
            }

        /* Add task  */
        case task.GET_TASK_PENDING:
        case task.ADD_TASK_PENDING:
            return {
                ...state,
                task: {
                    pending: true,
                    success: false,
                    error: false

                }

            }
        case task.GET_TASK_SUCCESS:
        case task.ADD_TASK_SUCCESS:
            return {
                ...state,
                task: {
                    task: payload,
                    pending: false,
                    success: true,
                    error: false
                }
            }

        case task.GET_TASK_ERROR:
        case task.ADD_TASK_ERROR:
            return {
                ...state,
                task: {
                    // register: payload,
                    pending: false,
                    success: false,
                    error: true
                }
            }

        /* Get All Bucket Task */
        case task.GET_ALL_BUCKET_TASK_PENDING:
            return {
                ...state,
                allBucketTask: {
                    pending: true,
                    success: false,
                    error: false
                }
            }
        case task.GET_ALL_BUCKET_TASK_SUCCESS:
            return {
                ...state,
                allBucketTask: {
                    bucketTask: payload,
                    pending: false,
                    success: true,
                    error: false
                }
            }

        case task.GET_ALL_BUCKET_TASK_ERROR:
            return {
                ...state,
                allBucketTask: {
                    // register: payload,
                    pending: false,
                    success: false,
                    error: true
                }
            }
        default:
            return state;
    }
}
export default Task