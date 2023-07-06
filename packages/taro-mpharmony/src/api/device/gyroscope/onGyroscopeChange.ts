import Taro from "@tarojs/taro"
import { shouldBeObject } from "src/utils"

export const onGyroscopeChange: typeof Taro.onGyroscopeChange = (callback) => {
  const name = 'onGyroscopeChange'
  // options must be an Object
  const isObject = shouldBeObject(callback)
  if (!isObject.flag) {
    const res = { errMsg: `${name}:fail ${isObject.msg}` }
    console.error(res.errMsg)
    return Promise.reject(res)
  }
  console.log('on gyroscope change')
  // @ts-ignore
  const ret = native.onGyroscopeChange(callback)
  return ret
}
