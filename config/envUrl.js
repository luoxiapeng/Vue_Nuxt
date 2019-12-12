/**
 *  envConfigPageUrl
 *  @author luoxiapeng
 *  @lastTime 2019/12/1
 */
// 兼容本地环境
export function getWayUrl () {
  const urlMap = {
    local: 'http://api-dev.myutopa.com/pay/app',
    test: 'http://api-test.myutopa.com/pay/app',
    dev: 'http://api-dev.myutopa.com/pay/app',
    prod: 'http://api.myutopa.com/pay/app',
    pred: 'http://api-pred.myutopa.com/pay/app'
  }
  // sit,uat,prod
  let stage = process.env.ENV_DEV
  // development,production
  const nodeEnv = process.env.NODE_ENV
  // nodeEnv为production并且stage不存在默认为生产环境
  console.log('3333', nodeEnv)
  if (nodeEnv === 'production') {
    if (process.env.ENV_DEV === 'prod') {
      // production 生产环境
      stage = 'prod'
    } else if (process.env.ENV_DEV === 'pred') {
      // production 生产环境
      stage = 'pred'
    } else if (process.env.ENV_DEV === 'test') {
      // test 测试环境
      stage = 'test'
    } else {
      // dev 开发环境
      stage = 'dev'
    }
  } else if (nodeEnv === 'development') {
    stage = 'dev'
  } else {
    // stage不存在默认为本地开发环境
    stage = stage || 'local'
  }

  return urlMap[stage]
}
