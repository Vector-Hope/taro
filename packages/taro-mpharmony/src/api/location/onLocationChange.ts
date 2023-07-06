import Taro from "@tarojs/taro"
import { shouldBeObject } from "src/utils"

export const onLocationChange: typeof Taro.onLocationChange = (callback) => {
  const name = 'onLocationChange'
  // options must be an Object
  const isObject = shouldBeObject(callback)
  if (!isObject.flag) {
    const res = { errMsg: `${name}:fail ${isObject.msg}` }
    console.error(res.errMsg)
    return Promise.reject(res)
  }
  console.log('on location change')
  // @ts-ignore
  const ret = native.onLocationChange(callback)
  return ret
}
