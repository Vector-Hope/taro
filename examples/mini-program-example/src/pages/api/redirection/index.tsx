import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

/**
 * 跳转
 * @returns
 */

export default class Index extends React.Component {
  state = {
    list: [
      {
        id: 'openBusinessView',
        func: null,
      },
      {
        id: 'openEmbeddedMiniProgram',
        func: null,
      },
      {
        id: 'navigateToMiniProgram',
        func: null,
      },
      {
        id: 'navigateBackMiniProgram',
        func: null,
      },
      {
        id: 'exitMiniProgram',
        func: null,
      },
    ],
  }
  render() {
    return (
      <View className='api-page'>
        {this.state.list.map((item) => {
          return (
            <View key={item.id} className='api-page-btn' onClick={item.func == null ? () => {} : item.func}>
              {item.id}
              {item.func == null && <Text className='navigator-state tag'>未创建Demo</Text>}
            </View>
          )
        })}
      </View>
    )
  }
}
