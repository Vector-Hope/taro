import Taro from "@tarojs/taro"
import { shouldBeObject } from "src/utils"

export const offUserCaptureScreen: typeof Taro.offUserCaptureScreen = (callback) => {
  const name = 'offUserCaptureScreen'
  // options must be an Object
  const isObject = shouldBeObject(callback)
  if (!isObject.flag) {
    const res = { errMsg: `${name}:fail ${isObject.msg}` }
    console.error(res.errMsg)
    return Promise.reject(res)
  }
  console.log('off user capture screen')
  // @ts-ignore
  const ret = native.offUserCaptureScreen(callback)
  return ret
}
