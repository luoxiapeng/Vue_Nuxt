/**
 * @author luoxiapeng
 * @lastTime 2019/12/2
 */
import request from '@/config/Require'

export function getHome(params:Object):any{
  return request.get({
    reqMethod: 'sys.ViewResourceService.menuTree',
    params
  })
 }
 export function getHome2(params:Object,url?:any):any{
  return request.post({
    reqMethod: 'sys.ViewResourceService.menuTree',
    params
  },url)
 }