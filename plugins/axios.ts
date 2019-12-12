/**
 * @author luoxiapeng
 * @lastTime 2019/12/1
 */
import axios from 'axios'
import Vue from 'vue'
import {getWayUrl} from '@/config/envUrl'

let RequestBaseUrl: string | undefined

try {
  RequestBaseUrl = process.env.NODE_ENV === 'development' ? getWayUrl() : process.env.VUE_APP_BASEURL
} catch (error) {
  RequestBaseUrl = getWayUrl()
}
const service = axios.create({
  baseURL: './',
  timeout: 1000
})


Vue.prototype.$http = service

// 请求拦截
// request请求拦截器
service.interceptors.request.use((config) => {
  if(config.url===undefined){
    config.baseURL=RequestBaseUrl
  }
  return config
}, (error) => {
  Promise.reject(error)
})
// respone返回拦截器
service.interceptors.response.use(
  ({data}) => {
    return data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service