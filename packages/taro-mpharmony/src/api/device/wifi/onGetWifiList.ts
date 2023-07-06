import Taro from "@tarojs/taro"
import { shouldBeObject } from "src/utils"

export const onGetWifiList: typeof Taro.onGetWifiList = (callback) => {
  const name = 'onWifiConnected'
  // options must be an Object
  const isObject = shouldBeObject(callback)
  if (!isObject.flag) {
    const res = { errMsg: `${name}:fail ${isObject.msg}` }
    console.error(res.errMsg)
    return Promise.reject(res)
  }
  console.log('on get wifi list')
  // @ts-ignore
  const ret = native.onGetWifiList(callback)
  return ret
}
