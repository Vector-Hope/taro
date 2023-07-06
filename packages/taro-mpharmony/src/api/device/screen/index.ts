import { temporarilyNotSupport } from '../../../utils'

// 屏幕
export const setVisualEffectOnCapture = /* @__PURE__ */ temporarilyNotSupport('setVisualEffectOnCapture')
// export const setScreenBrightness = /* @__PURE__ */ temporarilyNotSupport('setScreenBrightness')
// export const setKeepScreenOn = /* @__PURE__ */ temporarilyNotSupport('setKeepScreenOn')
// export const onUserCaptureScreen = /* @__PURE__ */ temporarilyNotSupport('onUserCaptureScreen')
// export const offUserCaptureScreen = /* @__PURE__ */ temporarilyNotSupport('offUserCaptureScreen')
// export const getScreenBrightness = /* @__PURE__ */ temporarilyNotSupport('getScreenBrightness')

export * from './getScreenBrightness'
export * from './offUserCaptureScreen'
export * from './onUserCaptureScreen'
export * from './setKeepScreenOn'
export * from './setScreenBrightness'