/**
 * @author luoxiapeng
 * @lastTime 2019/12/2
 */
import axiosServe from '@/plugins/axios'
async function AxiosRequire(params={}){
  let promise =new Promise((resolve,reject)=>{
      axiosServe(params).then((response)=>{
        resolve(response)
      }).catch((response) => {
        window.console && console.error('[ajax] ', '服务出错\n\t error path: \n', location.href, response)
        reject(response)
      })
  })
  return await promise
}

// get 请求
function get(req:any,url?:any) {
  return AxiosRequire(Object.assign(req, {
    method: 'get',
    url
  }))
}

// post 请求
function post(req:any,url?:any) {
  return AxiosRequire(Object.assign(req, {
    method: 'post',
    url
  }))
}
export default {
  AxiosRequire,
  get,
  post,
}