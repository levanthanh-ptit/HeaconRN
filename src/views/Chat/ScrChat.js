import React, { Component } from 'react'
import { View, } from 'react-native'
import Chat from '../../components/Chat/Chat'
import ChatHeader from '../../components/UI/ChatHeader';
import I from '../../components/UI/AppIcon'
import Background from '../../components/UI/Background'
export default class SrcChat extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle:
      <ChatHeader
        name={navigation.getParam('friendName', '')}
        defaultAvatar={<I type='avatar' color='#ffffff' />}
      />,
  });
  render() {
    const { navigation } = this.props;
    var userId = navigation.getParam('userId', null);
    var targerId = navigation.getParam('tagetId', null);
    return (
      <Background
        id='ChatContainer'>
        <Chat
          navigation={this.props.navigation}
          userId={userId}
          targerId={targerId}
        />
      </Background>
    )
  }
}
