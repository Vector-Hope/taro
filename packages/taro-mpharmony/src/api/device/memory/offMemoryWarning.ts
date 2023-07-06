import Taro from "@tarojs/taro"
import { shouldBeObject } from "src/utils"

export const offMemoryWarning: typeof Taro.offMemoryWarning = (callback) => {
  const name = 'offMemoryWarning'
  // options must be an Object
  const isObject = shouldBeObject(callback)
  if (!isObject.flag) {
    const res = { errMsg: `${name}:fail ${isObject.msg}` }
    console.error(res.errMsg)
    return Promise.reject(res)
  }
  console.log('off memory warning')
  // @ts-ignore
  const ret = native.offMemoryWarning(callback)
  return ret
}
