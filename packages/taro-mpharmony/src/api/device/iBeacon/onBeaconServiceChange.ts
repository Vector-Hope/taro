import Taro from "@tarojs/taro"
import { shouldBeObject } from "src/utils"

export const onBeaconServiceChange: typeof Taro.onBeaconServiceChange = (callback) => {
  const name = 'onBeaconServiceChange'
  // options must be an Object
  const isObject = shouldBeObject(callback)
  if (!isObject.flag) {
    const res = { errMsg: `${name}:fail ${isObject.msg}` }
    console.error(res.errMsg)
    return Promise.reject(res)
  }
  console.log('on beacon service change')
  // @ts-ignore
  const ret = native.onBeaconServiceChange(callback)
  return ret
}
