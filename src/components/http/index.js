import axios from 'axios'
const service = axios.create({
    // 请求基础路径，如果配置了基础路径，在实际发请求的时候可以省略基础路径
    baseURL: '/api',
    // 超时时间
    timeout: 10000
})
// 响应拦截
service.interceptors.response.use(res=>{
   return res.data
})


// 默认导出
export default service