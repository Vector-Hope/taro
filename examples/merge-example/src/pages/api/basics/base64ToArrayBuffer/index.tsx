import React from 'react'
import Taro from '@tarojs/taro'
import { Text, Input, Picker, View } from '@tarojs/components'
import { TestConsole } from '@/util/util'
import ButtonList from '@/components/buttonList'
import InfoList from '@/components/infoList'
import './index.scss'
import definition from '@tarojs/plugin-platform-mpharmony/build/config/harmony-definition.json'

/**
 * base64ToArrayBuffer
 * @returns
 */



export default class Index extends React.Component {
  state = {
    canIUseContentList: [] as Array<string>,
    list: [
      {
        id: 'base64ToArrayBuffer',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.base64ToArrayBuffer')
          const base64 = 'aewD'
          const arrayBuffer = Taro.base64ToArrayBuffer(base64)
          TestConsole.consoleNormal('Taro.base64ToArrayBuffer before: ', base64)
          TestConsole.consoleNormal('Taro.base64ToArrayBuffer after: ', arrayBuffer)
          const res = {
            Int8Array: new Int8Array(arrayBuffer),
            Uint8Array: new Uint8Array(arrayBuffer),
            ArrayBufferByteLength: arrayBuffer.byteLength,
          }
          TestConsole.consoleResult.call(this, res, apiIndex)
        },
      },
    ],
    envInfo: {
      framwork: {
        label: '框架',
        value: ''
      },
      taro_env: {
        label: 'Taro环境',
        value: ''
      },
      taro_platform: {
        label: 'Taro平台',
        value: ''
      },
      taro_version: {
        label: 'Taro版本',
        value: ''
      },
    },
    selectCanIUseValue: 0
  }
  getcanIUseContentList = (obj: Object, str?: string) => {
    const {canIUseContentList} = this.state
    if (str) {
      for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'boolean') {
          canIUseContentList.push(str + '.' + key)
          this.setState({
            canIUseContentList
          })
        } else {
          this.getcanIUseContentList(value, str + '.' + key)
        }
      }
    } else {
      for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'boolean') {
          canIUseContentList.push(key)
          this.setState({
            canIUseContentList
          })
        } else {
          this.getcanIUseContentList(value, key)
        }
      }
    }
  }
  taroEnv = () => {
    const {FRAMEWORK, TARO_ENV, TARO_PLATFORM, TARO_VERSION} = Taro.env
    let {envInfo} = this.state
    envInfo.framwork.value = FRAMEWORK
    envInfo.taro_env.value = TARO_ENV
    envInfo.taro_platform.value = TARO_PLATFORM || ''
    envInfo.taro_version.value = TARO_VERSION || ''
    this.setState({
      envInfo
    })
  }
  handleChange = (e) => {
    this.setState({
      selectCanIUseValue: e.detail.value,
    })
  }
  getCanIUse = () => {
    const {canIUseContentList, selectCanIUseValue} = this.state
    console.log(canIUseContentList[selectCanIUseValue],Taro.canIUse(canIUseContentList[selectCanIUseValue]))
    if (Taro.canIUse(canIUseContentList[selectCanIUseValue])) {
      Taro.showToast({
        title: canIUseContentList[selectCanIUseValue] + '可用',
        icon: 'success',
        duration: 2000
      })
    } else {
      Taro.showToast({
        title: canIUseContentList[selectCanIUseValue] + '不可用',
        icon: 'error',
        duration: 2000
      })
    }
  }
  onLoad() {
    this.getcanIUseContentList(definition.apis)
    this.getcanIUseContentList(definition.components)
  }
  render() {
    const { list, envInfo, canIUseContentList, selectCanIUseValue } = this.state
    return (
      <View className='api-page'>
        {/* <InfoList infoList={envInfo} />
        <View className='trigger-btn-area'>
          <View className='trigger-btn' onClick={this.taroEnv}>获得环境</View>
        </View> */}
        <View className='form-wrapper'>
          <View className='form-input'>
            <Text>base64: </Text>
            <Input type='text' placeholder='将会获取焦点'/>
          </View>
          <Picker mode='selector' range={canIUseContentList} value={selectCanIUseValue} onChange={this.handleChange}>
            <View className='form-picker'>canIUse：{canIUseContentList[selectCanIUseValue]}</View>
          </Picker>
        </View>
        <View className='trigger-btn-area'>
          <View className='trigger-btn' onClick={this.getCanIUse}>canIUse</View>
        </View>
        <ButtonList buttonList={list} />
      </View>
    )
  }
}
