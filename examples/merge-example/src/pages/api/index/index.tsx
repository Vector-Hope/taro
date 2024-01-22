import Taro from '@tarojs/taro'
import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import logo from '@/assets/api/logo.png'
import frameworkPng from '@/assets/api/frame.png'
import basicsPng from '@/assets/api/iphone.png'
import routingPng from '@/assets/api/routing.png'
import redirectionPng from '@/assets/api/redirection.png'
import interfacePng from '@/assets/api/interface.png'
import networkPng from '@/assets/api/network.png'
import cachePng from '@/assets/api/cache.png'
import canvasPng from '@/assets/api/canvas.png'
import mediaPng from '@/assets/api/media.png'
import locationPng from '@/assets/api/local.png'
import filePng from '@/assets/api/file.png'
import openAPISPng from '@/assets/api/openapi.png'
import devicePng from '@/assets/api/devices.png'
import wxmlPng from '@/assets/api/wxml.png'
import taroPng from '@/assets/api/taro.png'
import { TestConsole } from '@/util/util'
import TabBar from '../interface/tabBar'

import './index.scss'
import { apiName } from './module'

const PNGS = {
  frameworkPng,
  basicsPng,
  routingPng,
  redirectionPng,
  interfacePng,
  networkPng,
  cachePng,
  canvasPng,
  mediaPng,
  locationPng,
  filePng,
  openAPISPng,
  devicePng,
  wxmlPng,
  taroPng,
}
export default class Index extends React.Component {
  state = {
    list: [
      {
        id: 'framework',
        name: '框架',
        open: false,
        pages: [],
      },
      {
        id: 'basics',
        name: '基础',
        open: false,
        pages: [
          {
            id: 'canIUse',
            name: 'canIUse'
          },
          {
            id: 'base64ToArrayBuffer',
            name: '转换base64为ArrayBuffer数据'
          },
          {
            id: 'getSystemInfo',
            name: '获得系统信息'
          },
          {
            id: 'getLaunchOptionsSync',
            name: '获得启动参数'
          },
        ],
      },
      {
        id: 'routing',
        name: '路由',
        open: false,
        pages: [],
        target: [],
      },
      {
        id: 'redirection',
        name: '跳转',
        open: false,
        pages: [],
        target: [],
      },
      // {
      //   id: 'interface',
      //   name: '界面',
      //   open: false,
      //   pages: [
      //     'interaction',
      //     'navigationBar',
      //     'tabBar',
      //     'font',
      //     'pullDownRefresh',
      //     'scroll',
      //     'animation',
      //     'customizedComponents',
      //     'menu',
      //   ],
      // },
      // {
      //   id: 'network',
      //   name: '网络',
      //   open: false,
      //   pages: ['request', 'download', 'upload', 'webSocket'],
      // },
      // {
      //   id: 'cache',
      //   name: '数据缓存',
      //   open: false,
      //   pages: [],
      // },
      // {
      //   id: 'canvas',
      //   name: '画布',
      //   open: false,
      //   pages: [],
      // },
      // {
      //   id: 'media',
      //   name: '媒体',
      //   open: false,
      //   pages: [
      //     'image',
      //     'video',
      //     'audio',
      //   ],
      // },
      // {
      //   id: 'location',
      //   name: '位置',
      //   open: false,
      //   pages: [],
      // },
      // {
      //   id: 'file',
      //   name: '文件',
      //   open: false,
      //   pages: [],
      // },
      // {
      //   id: 'openAPIS',
      //   name: '开放接口',
      //   open: false,
      //   pages: [
      //     'login',
      //     'userInfomation',
      //     'setting',
      //   ],
      // },
      // {
      //   id: 'device',
      //   name: '设备',
      //   open: false,
      //   pages: [
      //     'clipBoard',
      //     'network',
      //     'screen',
      //     'keyboard',
      //     'phoneCall',
      //   ],
      // },
      // {
      //   id: 'wxml',
      //   name: 'WXML',
      //   open: false,
      //   pages: [],
      // },
      // {
      //   id: 'taro',
      //   name: 'Taro',
      //   open: false,
      //   pages: ['expand'],
      // },
    ],
    isTabBarPage: false,
  }
  kindToggle = (e) => {
    const id = e.currentTarget.id
    const list = this.state.list
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setState({
      list: list,
    })
  }

  goToComponent = (id: string, page?: string) => {
    return () => {
      Taro.navigateTo({
        url: `/pages/api/${id}/${page ? page + '/' : ''}index`,
      })
    }
  }

  onTabItemTap(res) {
    if (res) {
      Taro.setStorageSync('onTabItemTap', res)
    } else {
      Taro.setStorageSync('onTabItemTap', 'Triggered')
    }
    TestConsole.consoleNormal('Page.onTabItemTap', res)
  }

  enterTabBarPage = () => {
    Taro.pageScrollTo({
      scrollTop: 0,
    })
    this.setState({
      isTabBarPage: true,
    })
  }

  leaveTabBarPage = function () {
    this.setState({
      isTabBarPage: false,
    })
  }

  render() {
    const { list = [], isTabBarPage = false } = this.state
    if (isTabBarPage) {
      return (
        <TabBar
          backToAPI={() => {
            this.leaveTabBarPage()
          }}
        />
      )
    } else {
      return (
        <View className='index'>
          <View className='index-hd'>
            <Image className='index-logo' src={logo} />
            <View className='index-desc'>
              <Text className='index-desc_text'>以下将展示 Taro 官方接口能力。</Text>
            </View>
          </View>
          <View className='index-bd'>
            <View className='kind-list'>
              {
                list.map((item) => {
                  return (
                    <View className='kind-list-item' key={item.id}>
                      <View
                        id={item.id}
                        className={'kind-list-item-hd ' + (item.open ? 'kind-list-item-hd-show' : '')}
                        onClick={item.pages.length == 0 ? this.goToComponent(item.id) : this.kindToggle}
                      >
                        <View className='kind-list-text'>
                          <Text>{item.name}</Text>
                        </View>
                        <Image className='kind-list-img' src={PNGS[`${item.id}Png`] ? PNGS[`${item.id}Png`] : ''} />
                      </View>
                      <View className={'kind-list-item-bd ' + (item.open ? 'kind-list-item-bd-show' : '')}>
                        <View className={'navigator-box ' + (item.open ? 'navigator-box-show' : '')}>
                          {item.pages.map((page, index) => {
                            return (
                              <View
                                onClick={page.id === 'tabBar' ? this.enterTabBarPage : this.goToComponent(item.id, page.id)}
                                key={index}
                                className='navigator navigator-bottom-line'
                                id={`${item.id}-${page.id}`}
                              >
                                <Text className='navigator-text'>
                                  {page.name}
                                </Text>
                                <View className='navigator-arrow' />
                              </View>
                            )
                          })}
                        </View>
                      </View>
                    </View>
                  )
                })}
            </View>
          </View>
        </View>
      )
    }
  }
}
