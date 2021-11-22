import axios from "axios";
export const baseURL = "http://localhost:8000/";
const request = axios.create({
    withCredentials: true,
    baseURL,
});

request.interceptors.request.use(async (config) => {
    const token = ""/* getAuthToken() */;
    config.headers.authorization = "Barear|".concat(token);
    return config;
}, Promise.reject);

request.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (err) => {
        // if (err && err.response && err.response.status === 401) {
        //     // store.dispatch(clearAuthToken())
        //     //   store.dispatch(getUserLogoutSuccess())
        //     // history.push(signin)
        // }

        return Promise.reject;
    }
);

export default request;