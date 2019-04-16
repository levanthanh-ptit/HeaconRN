import React, { Component } from 'react'
import { View } from 'react-native'
import ChatSetting from '../../components/Chat/ChatSetting/ChatSetting'
export default class ScrChatSetting extends Component {
  static navigationOptions = {
    title: 'Setting',
  };
  render() {
    return (
      <View>
        <ChatSetting></ChatSetting>
      </View>
    )
  }
}