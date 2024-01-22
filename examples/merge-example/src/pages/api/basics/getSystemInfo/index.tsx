import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { TestConsole } from '@/util/util'
import ButtonList from '@/components/buttonList'
import './index.scss'
/**
 * 基础-系统
 * @returns
 */

export default class Index extends React.Component {
  state = {
    list: [
      {
        id: 'getSystemInfoSync',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.getSystemInfoSync')
          try {
            const res = Taro.getSystemInfoSync()
            TestConsole.consoleSuccess.call(this, res, apiIndex)
          } catch (err) {
            TestConsole.consoleFail.call(this, err, apiIndex)
          }
        },
      },
      {
        id: 'getSystemInfo',
        func: (apiIndex) => {
          TestConsole.consoleTest('Taro.getSystemInfo')
          Taro.getSystemInfo({
            success: (res) => {
              TestConsole.consoleSuccess.call(this, res, apiIndex)
            },
            fail: (res) => {
              TestConsole.consoleFail.call(this, res, apiIndex)
            },
            complete: (res) => {
              TestConsole.consoleComplete.call(this, res, apiIndex)
            },
          }).then((res) => {
            TestConsole.consoleResult.call(this, res, apiIndex)
          })
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
