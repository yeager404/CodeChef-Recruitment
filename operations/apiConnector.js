const axios = require("axios");
const axiosInstance = axios.create({});
const apiConnector = (method, url)=> {
    return axiosInstance({
        method: `${method}`,
        url: `${url}`
    })
}
module.exports = {
    axiosInstance,
    apiConnector
}