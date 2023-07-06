import Taro from "@tarojs/taro"
import { shouldBeObject } from "src/utils"

export const offGetWifiList: typeof Taro.offGetWifiList = (callback) => {
  const name = 'offGetWifiList'
  // options must be an Object
  const isObject = shouldBeObject(callback)
  if (!isObject.flag) {
    const res = { errMsg: `${name}:fail ${isObject.msg}` }
    console.error(res.errMsg)
    return Promise.reject(res)
  }
  console.log('off get wifi list')
  // @ts-ignore
  const ret = native.offGetWifiList(callback)
  return ret
}
