import Taro from "@tarojs/taro"
import { shouldBeObject } from "src/utils"

export const onBLECharacteristicValueChange: typeof Taro.onBLECharacteristicValueChange = (callback) => {
  const name = 'onBLECharacteristicValueChange'
  // options must be an Object
  const isObject = shouldBeObject(callback)
  if (!isObject.flag) {
    const res = { errMsg: `${name}:fail ${isObject.msg}` }
    console.error(res.errMsg)
    return Promise.reject(res)
  }
  console.log('on BLE characteristic value change')
  // @ts-ignore
  const ret = native.onBLECharacteristicValueChange(callback)
  return ret
}
