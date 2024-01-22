import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import ButtonList from '@/components/buttonList'
import { TestConsole } from '@/util/util'
import './index.scss'

/**
 * Taro-拓展
 * @returns
 */

export default class Index extends React.Component {
  state = {
    list: [
      {
        id: 'getEnv',
        func: (apiIndex, data) => {
          TestConsole.consoleTest('Taro.getEnv')
          TestConsole.consoleResult.call(this, Taro.getEnv(), apiIndex)
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
