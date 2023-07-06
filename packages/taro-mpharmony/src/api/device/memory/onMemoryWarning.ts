import Taro from "@tarojs/taro"
import { shouldBeObject } from "src/utils"

export const onMemoryWarning: typeof Taro.onMemoryWarning = (callback) => {
  const name = 'onMemoryWarning'
  // options must be an Object
  const isObject = shouldBeObject(callback)
  if (!isObject.flag) {
    const res = { errMsg: `${name}:fail ${isObject.msg}` }
    console.error(res.errMsg)
    return Promise.reject(res)
  }
  console.log('on memory warning')
  // @ts-ignore
  const ret = native.onMemoryWarning(callback)
  return ret
}
