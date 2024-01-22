import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { TestConsole } from '@/util/util'
import ButtonList from '@/components/buttonList'
import './index.scss'

/**
 * 跳转
 * @returns
 */

export default class Index extends React.Component {
  state = {
    list: [
      {
        id: 'navigateToMiniProgram',
        inputData: {
          appId: 'com.advanced.temp1',
          path: 'EntryAbility:///pages/api/framework/index?paramA=good',
          extraData: {
            paramB: 'morning',
            paramC: 'erveryone',
          },
        },
        func: (apiIndex, data) => {
          TestConsole.consoleTest('Taro.navigateToMiniProgram')
          Taro.navigateToMiniProgram({
            ...data,
            success: (res) => {
              TestConsole.consoleSuccess.call(this, res, apiIndex)
            },
            fail: (res) => {
              TestConsole.consoleFail.call(this, res, apiIndex)
            },
            complete: (res) => {
              TestConsole.consoleComplete.call(this, res, apiIndex)
            },
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
