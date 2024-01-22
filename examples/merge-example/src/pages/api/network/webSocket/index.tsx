import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import ButtonList from '@/components/buttonList'
import { TestConsole } from '@/util/util'
import './index.scss'

/**
 * 网络-WebSocket
 * @returns
 */

const wsConnectConfig = {
  url: 'ws://192.168.48.245:3000',
  header: {
    'content-type': 'application/json',
  },
  protocols: [],
  tcpNoDelay: true,
}

export default class Index extends React.Component {
  state = {
    task: {},
    list: [
      {
        id: 'connectSocket',
        inputData: wsConnectConfig,
        func: (apiIndex, data) => {
          TestConsole.consoleTest('Taro.connectSocket')
          Taro.connectSocket({
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
      {
        id: 'SocketTask',
        inputData: wsConnectConfig,
        func: (apiIndex, data) => {
          TestConsole.consoleTest('Taro.SocketTask')
          Taro.connectSocket({
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
          }).then((task) => {
            this.setState({ task })
            task.onOpen((res) => {
              console.log('SocketTask.onOpen:', res)
            })
            task.onMessage((res) => {
              console.log('SocketTask.onMessage:', res)
              Taro.showToast({
                title: res.data,
              })
            })
            task.onClose((res) => {
              console.log('SocketTask.onClose:', res)
            })
            task.onError((res) => {
              console.log('SocketTask.onError:', res)
            })
          })
        },
      },
      {
        id: 'SocketTask.send',
        inputData: {
          data: 'Taro三方框架',
        },
        func: (apiIndex, data) => {
          TestConsole.consoleTest('SocketTask.send')
          const task = this.state.task as Taro.SocketTask
          if (task.readyState === undefined || task.readyState !== task.OPEN) {
            console.log('先点击SocketTask')
            Taro.showToast({
              title: 'Click SocketTask',
              icon: 'error',
            })
            return
          }
          task.send({
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
      {
        id: 'SocketTask.close',
        inputData: {
          code: 1000,
          reason: '主动关闭',
        },
        func: (apiIndex, data) => {
          TestConsole.consoleTest('SocketTask.close')
          const task = this.state.task as Taro.SocketTask
          if (task.readyState === undefined || task.readyState !== task.OPEN) {
            console.log('先点击SocketTask')
            Taro.showToast({
              title: 'Click SocketTask',
              icon: 'error',
            })
            return
          }
          task.close({
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
