import Taro from "@tarojs/taro"
import { shouldBeObject } from "src/utils"

export const offWifiConnected: typeof Taro.offWifiConnected = (callback) => {
  const name = 'onWifiConnected'
  // options must be an Object
  const isObject = shouldBeObject(callback)
  if (!isObject.flag) {
    const res = { errMsg: `${name}:fail ${isObject.msg}` }
    console.error(res.errMsg)
    return Promise.reject(res)
  }
  console.log('off wifi connected')
  // @ts-ignore
  const ret = native.offWifiConnected(callback)
  return ret
}
