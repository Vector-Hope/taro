import Taro from "@tarojs/taro"
import { shouldBeObject } from "src/utils"

export const onBLEConnectionStateChange: typeof Taro.onBLEConnectionStateChange = (callback) => {
  const name = 'onBLEConnectionStateChange'
  // options must be an Object
  const isObject = shouldBeObject(callback)
  if (!isObject.flag) {
    const res = { errMsg: `${name}:fail ${isObject.msg}` }
    console.error(res.errMsg)
    return Promise.reject(res)
  }
  console.log('on BLE connection state change')
  // @ts-ignore
  const ret = native.onBLEConnectionStateChange(callback)
  return ret
}
