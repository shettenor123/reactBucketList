import { put, takeLatest, call, delay, select, fork, all } from "redux-saga/effects";
import { actionTypes } from '../../Utils/constants'

import {
    getAllTask,
    getAllTaskPending,
    getAllTaskSuccess,
    getAllTaskError,

    addTaskError,
    addTaskPending,
    addTaskSuccess,

    getTaskError,
    getTaskPending,
    getTaskSuccess,

    deleteTaskError,
    deleteTaskPending,
    deleteTaskSuccess,

    getAllBucketTask,
    getAllBucketTaskError,
    getAllBucketTaskPending,
    getAllBucketTaskSuccess,

    addBucketTaskError,
    addBucketTaskPending,
    addBucketTaskSuccess,

    deleteBucketTaskError,
    deleteBucketTaskPending,
    deleteBucketTaskSuccess
} from '../actions/taskAction'

import {
    getAllTaskApi,
    addTaskApi,
    getTaskApi,
    deleteTaskApi,
    getAllBucketTaskApi,
    addBucketTaskApi,
    deleteBucketTaskApi
} from '../../Utils/api/api'
import history from "../../Utils/history";

const { task } = actionTypes;

/**
 * get All task
 */
function* getAllTaskSaga(action) {
    try {
        yield put(getAllTaskPending(true));
        const res = yield call(getAllTaskApi, action.payload);
        if (res.success) {
            yield put(getAllTaskSuccess(res.data));
        } else {
            yield put(getAllTaskError(res));
        }
    } catch (err) {
        yield put(getAllTaskError(err));
    }
}
/**
 * cREATE All task
 */
function* addTaskSaga(action) {
    try {
        yield put(addTaskPending(true));
        const res = yield call(addTaskApi, action.payload);
        if (res.success) {
            yield put(addTaskSuccess(res.data));
            history.push('/tasks')
            // yield put(getAllTask({}));

        } else {
            yield put(addTaskError(res));
        }
    } catch (err) {
        yield put(addTaskError(err));
    }
}
/**
 *get task
 */
function* getTaskSaga(action) {
    try {
        yield put(getTaskPending(true));
        const res = yield call(getTaskApi, action.payload);
        if (res.success) {
            yield put(getTaskSuccess(res.data));
        } else {
            yield put(getTaskError(res));
        }
    } catch (err) {
        yield put(getTaskError(err));
    }
}
function* deleteTaskSaga(action) {
    try {
        yield put(deleteTaskPending(true));
        const res = yield call(deleteTaskApi, action.payload);
        if (res.success) {
            if (res.success && res.data.message)
                alert(res.data.message)
            yield put(deleteTaskSuccess(res.data));
            yield put(getAllTask());
        } else {
            yield put(deleteTaskError(res));
        }
    } catch (err) {
        yield put(deleteTaskError(err));
    }
}

/**
 * get All task
 */
function* getAllBucketTaskSaga(action) {
    try {
        yield put(getAllBucketTaskPending(true));
        const res = yield call(getAllBucketTaskApi, action.payload);
        if (res.success) {
            yield put(getAllBucketTaskSuccess(res.data));
        } else {
            yield put(getAllBucketTaskError(res));
        }
    } catch (err) {
        yield put(getAllBucketTaskError(err));
    }
}

/**
 * cREATE bucke  task
 */
function* addBucketTaskSaga(action) {
    try {
        yield put(addBucketTaskPending(true));
        const res = yield call(addBucketTaskApi, action.payload);
        if (res.success) {
            yield put(addBucketTaskSuccess(res.data));
            history.push('/tasks')
            // yield put(getAllTask({}));

        } else {
            yield put(addBucketTaskError(res));
        }
    } catch (err) {
        yield put(addBucketTaskError(err));
    }
}

function* deleteBucketTaskSaga(action) {
    try {
        yield put(deleteBucketTaskPending(true));
        const res = yield call(deleteBucketTaskApi, action.payload);
        if (res.success) {
            yield put(deleteBucketTaskSuccess(res.data));
            yield put(getAllBucketTask());
            if (res.success && res.data.message)
                alert(res.data.message)
        } else {
            yield put(deleteBucketTaskError(res));
        }
    } catch (err) {
        yield put(deleteBucketTaskError(err));
    }
}

/*
  
  ACTION WATCHERS
  
  */

export function* getAllTaskWatcher() {
    yield takeLatest(task.GET_ALL_TASK, getAllTaskSaga);
}
export function* addTaskWatcher() {
    yield takeLatest(task.ADD_TASK, addTaskSaga);
}
export function* getTaskWatcher() {
    yield takeLatest(task.GET_TASK, getTaskSaga);
}
export function* deleteTaskWatcher() {
    yield takeLatest(task.DELETE_TASK, deleteTaskSaga);
}
export function* getAllBucketTaskWatcher() {
    yield takeLatest(task.GET_ALL_BUCKET_TASK, getAllBucketTaskSaga);
}
export function* addBucketTaskWatcher() {
    yield takeLatest(task.ADD_BUCKET_TASK, addBucketTaskSaga);
}
export function* deleteBucketTaskWatcher() {
    yield takeLatest(task.DELETE_BUCKET_TASK, deleteBucketTaskSaga);
}