import { all, fork } from "redux-saga/effects";
import {
    userRegisterWatcher,
    loginWatcher,
    logoutWatcher
} from './userSaga'
import {
    getAllTaskWatcher,
    addTaskWatcher,
    getTaskWatcher,
    deleteTaskWatcher,
    getAllBucketTaskWatcher,
    addBucketTaskWatcher,
    deleteBucketTaskWatcher
} from './taskSaga'

export default function* rootSaga() {
    yield all([
        userRegisterWatcher(),
        getAllTaskWatcher(),
        addTaskWatcher(),
        getTaskWatcher(),
        deleteTaskWatcher(),
        loginWatcher(),
        logoutWatcher(),
        getAllBucketTaskWatcher(),
        addBucketTaskWatcher(),
        deleteBucketTaskWatcher()
    ])
}