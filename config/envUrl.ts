/**
 *  envConfigPageUrl
 *  @author luoxiapeng
 *  @lastTime 2019/12/1
 */
// 兼容本地环境
export function getWayUrl ():string {
  const urlMap:any = {
    local: 'http://api-dev.myutopa.com/pay/app',
    test: 'http://api-test.myutopa.com/pay/app',
    dev: 'http://api-dev.myutopa.com/pay/app',
    prod: 'http://api.myutopa.com/pay/app',
    pred: 'http://api-pred.myutopa.com/pay/app'
  }
  // sit,uat,prod
  let stage = process.env.STAGE
  // development,production
  const nodeEnv = process.env.NODE_ENV
  // nodeEnv为production并且stage不存在默认为生产环境
  if (nodeEnv === 'production' && !stage) {
    if (process.env.VUE_APP_FLAG === 'prod') {
      // production 生产环境
      stage = 'prod'
    } else if (process.env.VUE_APP_FLAG === 'pred') {
      // production 生产环境
      stage = 'pred'
    } else if (process.env.VUE_APP_FLAG === 'test') {
      // test 测试环境
      stage = 'test'
    } else {
      // dev 开发环境
      stage = 'dev'
    }
  } else if (nodeEnv === 'development' && !stage) {
    stage = 'dev'
  } else {
    // stage不存在默认为本地开发环境
    stage = stage || 'local'
  }

  return urlMap[stage]
}
