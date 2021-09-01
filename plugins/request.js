// 基于 axios 封装的请求模块
import axios from 'axios'

// 创建请求对象
export const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
})

// 通过插件机制获取上下文对象（query, params,store...）
// 插件导出函数，必须作为default 成员
export default ({store}) => {
    // 请求拦截器
// 任何请求都要经过
// 在拦截器中做一些公共的业务处理
request.interceptors.request.use(function(config){
    // 设置用户Token
    const {user} = store.state
    if(user && user.token){
        config.headers.Authorization = `Token ${user.token}`

    }

    // 返回config请求配置对象
    return config;
}, function(error){
    // 如果请求失败（请求没有发出去）
    return Promise.reject(error)
})
}
