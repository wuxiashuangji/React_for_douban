import axios from 'axios'
import { message as Message, Popconfirm as MessageBox } from 'antd'
// import { getToken } from '@/utils/auth'
// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // request timeout
})
// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // if (store.getters.token) {
    //   // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    //   config.headers['X-Token'] = getToken()
    // }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    const res = response.data
    if (res.result !== 0) {
      Message({
        message: res.description,
        type: 'error',
        duration: 5 * 1000
      })
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.result === 401 || res.result === 402 || res.result === 403) {
        // 请自行在引入 MessageBox
        // todo 全局弹窗 使用store触发
        MessageBox.confirm(
          '你已被登出，可以取消继续留在该页面，或者重新登录',
          '确定登出',
          {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }
        ).then(() => {
          // clearSession('addRoute')
          // store.dispatch('FedLogOut').then(() => {
          //   location.reload() // 为了重新实例化vue-router对象 避免bug
          // })
        })
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.response.data.description,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

// export default service

class Http {
  constructor() {
    // 在这里, 它调用了父类的构造函数, 并将 lengths 提供给 Polygon 的"width"和"height"
    // 注意: 在派生类中, 必须先调用 super() 才能使用 "this"。
    // 忽略这个，将会导致一个引用错误。
    this.request = service
  }
  get(url, query = {}, isLoading = true) {
    return this.request({
      url: url,
      method: 'get',
      params: query,
      isLoading
    })
  }
  post(url, data = {}, isLoading = true) {
    return this.request({
      url: url,
      method: 'post',
      data,
      isLoading
    })
  }
  put(url, data = {}, isLoading = true) {
    return this.request({
      url: url,
      method: 'put',
      data,
      isLoading
    })
  }
  patch(url, data = {}, isLoading = true) {
    return this.request({
      url: url,
      method: 'PATCH',
      data,
      isLoading
    })
  }
  delete(url, data = {}, isLoading = true) {
    return this.request({
      url: url,
      method: 'DELETE',
      data,
      isLoading
    })
  }
}
// export default Http

export {
  service,
  Http
}
