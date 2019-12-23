import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "78c551e9-fbd0-4016-9511-55f739a05c4f",
    }
});

export const getAuthUserData = async () => (
    await instance.get(`auth/me`)
        .then(response => response.data)
)

export const logIn = async (props) => (
    await instance.post(`auth/login`, props)
        .then(response => response.data)
)

export const logOut = async () => (
    await instance.delete(`auth/login`)
        .then(response => response.data)
)

export const getCaptchaUrl = async () => (
    await instance.delete(`security/get-captcha-url`)
        .then(response => response.data)
)

export const getUserData = async (id) => (
    await instance.get(`profile/${id}`)
        .then(response => response.data)
)

export const getUserStatus = async (id) => (
    await instance.get(`profile/status/${id}`)
        .then(response => response.data)
)

export const updateUserStatus = async (status) => (
    await instance.put(`profile/status`, {status})
        .then(response => response.data)
)

export const getUsers = async (currentPage = 1, pageSize = 10) => (
    await instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
)

export const getNewsData = async (country = 'us') => (
    await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=f59a7b8bb2434e739e0bb1a119cae542`)
        .then(response => response.data)
)
