import Taro from '@tarojs/taro'

import { temporarilyNotSupport } from '../../utils'

// 录音
export const stopRecord = /* @__PURE__ */ temporarilyNotSupport('stopRecord')
export const startRecord = /* @__PURE__ */ temporarilyNotSupport('startRecord')
// export const getRecorderManager = /* @__PURE__ */ temporarilyNotSupport('getRecorderManager')

/**
 * 获取全局唯一的录音管理器
 */
export const getRecorderManager: typeof Taro.getRecorderManager = () =>{
  // @ts-ignore
  return native.getRecorderManager()
}