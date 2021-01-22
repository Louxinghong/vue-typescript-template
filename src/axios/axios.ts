import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

axios.defaults.baseURL = 'https://api.bilibili.com'
axios.defaults.timeout = 3000
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'

// post请求转换接口参数格式
axios.defaults.transformRequest = [
  (data, config) => {
    if (config['Content-Type'] === 'application/x-www-form-urlencoded') {
      const tempData: string[] = []
      Object.keys(data).forEach((item) => {
        tempData.push(`${item}=${data[item]}`)
      })
      return tempData.join('&')
    } else {
      return JSON.stringify(data)
    }
  }
]

// 请求拦截器
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  (data) => {
    return data
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

export default axios
