import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

/**
 * 设备-网络
 * @returns 
 */

export default class Index extends React.Component {
    state = {
        list: [
            {
                id: 'onNetworkWeakChange',
                func: null,
            }, 
            {
                id: 'onNetworkStatusChange',
                func: null,
            }, 
            {
                id: 'offNetworkWeakChange',
                func: null,
            }, 
            {
                id: 'offNetworkStatusChange',
                func: null,
            }, 
            {
                id: 'getNetworkType',
                func: null,
            }, 
            {
                id: 'getLocalIPAddress',
                func: null,
            }, 
        ], 
    }
    render () {
        return (
            <View className='api-page'>
                {
                    this.state.list.map((item) => {
                        return (
                            <View
                                className='api-page-btn'
                                onClick={item.func == null ? () => {} : item.func}
                            >
                                {item.id}
                                {
                                    item.func == null && (<Text className='navigator-state tag'>未创建Demo</Text>)
                                }
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}
