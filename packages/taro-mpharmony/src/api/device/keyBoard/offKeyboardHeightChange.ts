import Taro from "@tarojs/taro"
import { shouldBeObject } from "src/utils"

export const offKeyboardHeightChange: typeof Taro.offKeyboardHeightChange = (callback) => {
  const name = 'offKeyboardHeightChange'
  // options must be an Object
  const isObject = shouldBeObject(callback)
  if (!isObject.flag) {
    const res = { errMsg: `${name}:fail ${isObject.msg}` }
    console.error(res.errMsg)
    return Promise.reject(res)
  }
  console.log('off keyboard height change')
  // @ts-ignore
  const ret = native.offKeyboardHeightChange(callback)
  return ret
}
