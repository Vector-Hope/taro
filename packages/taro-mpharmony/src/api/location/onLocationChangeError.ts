import Taro from "@tarojs/taro"
import { shouldBeObject } from "src/utils"

export const onLocationChangeError: typeof Taro.onLocationChangeError = (callback) => {
  const name = 'onLocationChangeError'
  // options must be an Object
  const isObject = shouldBeObject(callback)
  if (!isObject.flag) {
    const res = { errMsg: `${name}:fail ${isObject.msg}` }
    console.error(res.errMsg)
    return Promise.reject(res)
  }
  console.log('on location change error')
  // @ts-ignore
  const ret = native.onLocationChangeError(callback)
  return ret
}
