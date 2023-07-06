import Taro from "@tarojs/taro"
import { shouldBeObject } from "src/utils"

export const onBluetoothDeviceFound: typeof Taro.onBluetoothDeviceFound = (callback) => {
  const name = 'openBluetoothAdapter'
  // options must be an Object
  const isObject = shouldBeObject(callback)
  if (!isObject.flag) {
    const res = { errMsg: `${name}:fail ${isObject.msg}` }
    console.error(res.errMsg)
    return Promise.reject(res)
  }
  console.log('on bluetooth device found')
  // @ts-ignore
  const ret = native.openBluetoothAdapter(callback)
  return ret
}
