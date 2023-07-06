import Taro from "@tarojs/taro"
import { shouldBeObject } from "src/utils"

export const onBeaconUpdate: typeof Taro.onBeaconUpdate = (callback) => {
  const name = 'onBeaconUpdate'
  // options must be an Object
  const isObject = shouldBeObject(callback)
  if (!isObject.flag) {
    const res = { errMsg: `${name}:fail ${isObject.msg}` }
    console.error(res.errMsg)
    return Promise.reject(res)
  }
  console.log('on beacon update')
  // @ts-ignore
  const ret = native.onBeaconUpdate(callback)
  return ret
}
