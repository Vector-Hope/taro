import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Textarea } from '@tarojs/components'
import './index.scss'

/**
 * 按钮列表
 * @returns
 */

interface Props {
  infoList: Object
}

interface States {
  inputData: Array<Object | String | undefined>
  textareaControl: Array<Boolean>
}

export default class Index extends React.Component<Props, States> {
  state = {
    inputData: [],
    textareaControl: [],
  }
  componentDidMount(): void {

  }

  render() {
    const { infoList } = this.props
    return (
      <View className="info-wrapper">
          {
            Object.keys(infoList).map((id) => {
              return (
                <View className="info-cell">
                  <View className="label-wrapper">
                    <View className="info-label">{infoList[id].label}</View>
                  </View>
                  <View className="value-wrapper">
                    <View className="info-value">{infoList[id].value ? infoList[id].value : '未获得'}</View>
                  </View>
                </View>
              )
            })
          }
      </View>
    )
  }
}
