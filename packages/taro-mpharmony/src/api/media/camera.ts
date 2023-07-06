import Taro from '@tarojs/taro'
// 相机
// export const createCameraContext = /* @__PURE__ */ temporarilyNotSupport('createCameraContext')


export const createCameraContext: typeof Taro.createCameraContext = () =>{
  // @ts-ignore
  return native.createCameraContext()
}