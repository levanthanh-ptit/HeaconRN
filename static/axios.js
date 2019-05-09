import axios from 'axios'
var constant = require('./constant')
var instance = axios.create({
    baseURL: constant.server,
    timeout: 10000,
})
export default instance