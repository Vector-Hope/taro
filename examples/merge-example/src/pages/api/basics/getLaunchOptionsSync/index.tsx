import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { TestConsole } from '@/util/util'
import ButtonList from '@/components/buttonList'
import './index.scss'

/**
 * 基础-小程序
 * @returns
 */

export default class Index extends React.Component {
  state = {
    list: [
      {
        id: 'getLaunchOptionsSync',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.getLaunchOptionsSync')
          const options = Taro.getLaunchOptionsSync()
          TestConsole.consoleResult.call(this, options, apiIndex)
        },
      },
    ],
  }
  render() {
    const { list } = this.state
    return (
      <View className='api-page'>
        <ButtonList buttonList={list} />
      </View>
    )
  }
}
