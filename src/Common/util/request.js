import axios from 'axios';
import sf from 'string-format';

const axiosInstance = axios.create({

    baseURL:'https://ttt.ebanktest.com.cn:10500/showdata/',
    timeout: 30000
});
axiosInstance.interceptors.request.use(function (config) {
    if (localStorage.getItem('csrf-token')) {
        config.headers.Authorization = localStorage.getItem('csrf-token');
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
axiosInstance.interceptors.response.use(res => {
    return res.data;
}, error => {
    // throw new ResError('请求服务器失败，请检查服务是否正常！');
    console.log(error)
});

export const getFnc = (url, params, pathVariable = null) => axiosInstance.get(sf(url, pathVariable), params);

export const postFnc = (url, params, pathVariable = null) => axiosInstance.post(sf(url, pathVariable), params);

// more request method ... put delete patch
