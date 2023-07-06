import Taro from "@tarojs/taro"
import { shouldBeObject } from "src/utils"

export const onKeyboardHeightChange: typeof Taro.onKeyboardHeightChange = (callback) => {
  const name = 'onKeyboardHeightChange'
  // options must be an Object
  const isObject = shouldBeObject(callback)
  if (!isObject.flag) {
    const res = { errMsg: `${name}:fail ${isObject.msg}` }
    console.error(res.errMsg)
    return Promise.reject(res)
  }
  console.log('on keyboard height change')
  // @ts-ignore
  const ret = native.onKeyboardHeightChange(callback)
  return ret
}
