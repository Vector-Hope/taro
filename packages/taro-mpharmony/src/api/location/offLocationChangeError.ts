import Taro from "@tarojs/taro"
import { shouldBeObject } from "src/utils"

export const offLocationChangeError: typeof Taro.offLocationChangeError = (callback) => {
  const name = 'offLocationChangeError'
  // options must be an Object
  const isObject = shouldBeObject(callback)
  if (!isObject.flag) {
    const res = { errMsg: `${name}:fail ${isObject.msg}` }
    console.error(res.errMsg)
    return Promise.reject(res)
  }
  console.log('off location change error')
  // @ts-ignore
  const ret = native.offLocationChangeError(callback)
  return ret
}
