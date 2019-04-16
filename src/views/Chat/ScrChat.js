import React, { Component } from 'react'
import { View } from 'react-native'
import Chat from '../../components/Chat/Chat'

export default class SrcChat extends Component {
  static navigationOptions = ({navigation}) => {
    let component = navigation.getParam('NavigationHeaderComponent', null);
    return {component}
  };
  render() {
    const { navigation } = this.props;
    var userId = navigation.getParam('userId', null);
    var targerId = navigation.getParam('tagetId', null);
    return (
      <View id='ChatContainer'>
        <Chat
          navigation={this.props.navigation}
          userId={userId}
          targerId={targerId}
        ></Chat>
      </View>
    )
  }
}
