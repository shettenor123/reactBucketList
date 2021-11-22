import request from '../Request'
export const loginApi = (data) => {
    const url = "login"
    return request({
        url,
        data,
        method: 'post'
    })
}
export const logoutApi = (data) => {
    const url = "logout"
    return request({
        url,
        data,
        method: 'post'
    })
}
export const userRegisterApi = (data) => {
    const url = "register"
    return request({
        url,
        data,
        method: 'post'
    })
}

/* Task APi start  here */
export const getAllTaskApi = (data) => {
    const url = "getAllTask"
    return request({
        url,
        method: 'get'
    })
}
export const getTaskApi = (data) => {
    const { id } = data
    const url = `getTask/${id}`
    return request({
        url,
        data,
        method: 'get'
    })
}
export const addTaskApi = (data) => {
    const url = "addTask"
    return request({
        url,
        data,
        method: 'post'
    })
}
export const deleteTaskApi = (data) => {
    const url = `deleteTask/${data.id}`
    return request({
        url,
        data,
        method: 'delete'
    })
}
/* Task Api ends  */

/* Bucket Api start  here */
export const getAllBucketTaskApi = (data) => {
    const url = "getAllTaskBucket"
    return request({
        url,
        method: 'get'
    })
}
export const getBucketTaskApi = (data) => {
    const { id } = data
    const url = `getBucketTask/${id}`
    return request({
        url,
        data,
        method: 'get'
    })
}
export const addBucketTaskApi = (data) => {
    const url = "addTaskBucket"
    return request({
        url,
        data,
        method: 'post'
    })
}
export const deleteBucketTaskApi = (data) => {
    const url = `deleteBucketTask/${data.id}`
    return request({
        url,
        data,
        method: 'delete'
    })
}