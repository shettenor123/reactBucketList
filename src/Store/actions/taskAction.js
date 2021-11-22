import { actionTypes } from '../../Utils/constants'
const { task } = actionTypes

export const getAllTask = (data) => {
    return {
        type: task.GET_ALL_TASK,
        payload: data
    }
}
export const getAllTaskPending = (data) => {
    return {
        type: task.GET_ALL_TASK_PENDING,
        payload: data
    }
}
export const getAllTaskSuccess = (data) => {
    return {
        type: task.GET_ALL_TASK_SUCCESS,
        payload: data
    }
}
export const getAllTaskError = (data) => {
    return {
        type: task.GET_ALL_TASK_ERROR,
        payload: data
    }
}

/* GET TASK */
export const getTask = (data) => {
    return {
        type: task.GET_TASK,
        payload: data
    }
}
export const getTaskPending = (data) => {
    return {
        type: task.GET_TASK_PENDING,
        payload: data
    }
}
export const getTaskSuccess = (data) => {
    return {
        type: task.GET_TASK_SUCCESS,
        payload: data
    }
}
export const getTaskError = (data) => {
    return {
        type: task.GET_TASK_ERROR,
        payload: data
    }
}

/* Add task */
export const addTask = (data) => {
    return {
        type: task.ADD_TASK,
        payload: data
    }
}
export const addTaskPending = (data) => {
    return {
        type: task.ADD_TASK_PENDING,
        payload: data
    }
}
export const addTaskSuccess = (data) => {
    return {
        type: task.ADD_TASK_SUCCESS,
        payload: data
    }
}
export const addTaskError = (data) => {
    return {
        type: task.ADD_TASK_ERROR,
        payload: data
    }
}

/* Delete task */
export const deleteTask = (data) => {
    return {
        type: task.DELETE_TASK,
        payload: data
    }
}
export const deleteTaskPending = (data) => {
    return {
        type: task.DELETE_TASK_PENDING,
        payload: data
    }
}
export const deleteTaskSuccess = (data) => {
    return {
        type: task.DELETE_TASK_SUCCESS,
        payload: data
    }
}
export const deleteTaskError = (data) => {
    return {
        type: task.DELETE_TASK_ERROR,
        payload: data
    }
}

/* Geta all bucket task */
export const getAllBucketTask = (data) => {
    return {
        type: task.GET_ALL_BUCKET_TASK,
        payload: data
    }
}
export const getAllBucketTaskPending = (data) => {
    return {
        type: task.GET_ALL_BUCKET_TASK_PENDING,
        payload: data
    }
}
export const getAllBucketTaskSuccess = (data) => {
    return {
        type: task.GET_ALL_BUCKET_TASK_SUCCESS,
        payload: data
    }
}
export const getAllBucketTaskError = (data) => {
    return {
        type: task.DELETE_BUCKET_TASK_ERROR,
        payload: data
    }
}

/* dELETE bucket task */
export const deleteBucketTask = (data) => {
    return {
        type: task.DELETE_BUCKET_TASK,
        payload: data
    }
}
export const deleteBucketTaskPending = (data) => {
    return {
        type: task.DELETE_BUCKET_TASK_PENDING,
        payload: data
    }
}
export const deleteBucketTaskSuccess = (data) => {
    return {
        type: task.DELETE_BUCKET_TASK_SUCCESS,
        payload: data
    }
}
export const deleteBucketTaskError = (data) => {
    return {
        type: task.DELETE_BUCKET_TASK_ERROR,
        payload: data
    }
}

/* GET bucket task */
export const getBucketTask = (data) => {
    return {
        type: task.GET_BUCKET_TASK,
        payload: data
    }
}
export const getBucketTaskPending = (data) => {
    return {
        type: task.GET_BUCKET_TASK_PENDING,
        payload: data
    }
}
export const getBucketTaskSuccess = (data) => {
    return {
        type: task.GET_BUCKET_TASK_SUCCESS,
        payload: data
    }
}
export const getBucketTaskError = (data) => {
    return {
        type: task.GET_BUCKET_TASK_ERROR,
        payload: data
    }
}

/* aDD bucket task */
export const addBucketTask = (data) => {
    return {
        type: task.ADD_BUCKET_TASK,
        payload: data
    }
}
export const addBucketTaskPending = (data) => {
    return {
        type: task.ADD_BUCKET_TASK_PENDING,
        payload: data
    }
}
export const addBucketTaskSuccess = (data) => {
    return {
        type: task.ADD_BUCKET_TASK_SUCCESS,
        payload: data
    }
}
export const addBucketTaskError = (data) => {
    return {
        type: task.ADD_BUCKET_TASK_ERROR,
        payload: data
    }
}