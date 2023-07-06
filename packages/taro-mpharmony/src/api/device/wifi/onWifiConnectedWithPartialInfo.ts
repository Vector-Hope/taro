import Taro from "@tarojs/taro"
import { shouldBeObject } from "src/utils"

export const onWifiConnectedWithPartialInfo: typeof Taro.onWifiConnectedWithPartialInfo = (callback) => {
  const name = 'onWifiConnectedWithPartialInfo'
  // options must be an Object
  const isObject = shouldBeObject(callback)
  if (!isObject.flag) {
    const res = { errMsg: `${name}:fail ${isObject.msg}` }
    console.error(res.errMsg)
    return Promise.reject(res)
  }
  console.log('on wifi connected with partial info')
  // @ts-ignore
  const ret = native.onWifiConnectedWithPartialInfo(callback)
  return ret
}
