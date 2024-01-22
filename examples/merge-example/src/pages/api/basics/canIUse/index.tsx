import React from 'react'
import Taro from '@tarojs/taro'
import { Picker, View } from '@tarojs/components'
import './index.scss'
import definition from '@tarojs/plugin-platform-mpharmony/build/config/harmony-definition.json'

/**
 * canIUse
 * @returns
 */
export default class Index extends React.Component {
  state = {
    canIUseContentList: [] as Array<string>,
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
        title: '该方法可用',
        icon: 'success',
        duration: 2000
      })
    } else {
      Taro.showToast({
        title: '该方法不可用',
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
    const {canIUseContentList, selectCanIUseValue } = this.state
    return (
      <View className='api-page'>
        <View className='form-wrapper'>
          <Picker mode='selector' range={canIUseContentList} value={selectCanIUseValue} onChange={this.handleChange}>
            <View className='form-picker'>canIUse：{canIUseContentList[selectCanIUseValue]}</View>
          </Picker>
        </View>
        <View className='trigger-btn-area'>
          <View className='trigger-btn' onClick={this.getCanIUse}>canIUse</View>
        </View>
      </View>
    )
  }
}
