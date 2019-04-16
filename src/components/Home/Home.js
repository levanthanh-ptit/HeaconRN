import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import { styles } from './HomeStyle'

export default class Home extends Component {
  render() {
    return (
      <View id='SettingContainer'
        style={styles.WrapedContainer}
      >
        <TouchableOpacity
          style={[styles.button, styles.boxWithShadow, styles.matching_button]}
          onPress={() => this.props.navigation.navigate('HomeSetting')} >
          <Text style={styles.icon}>&hearts;</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.boxWithShadow, styles.chat_button]}
          title="chat"
          onPress={() => this.props.navigation.navigate('FriendList')}>
          <Text style={styles.button_title}>FRIENDS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.boxWithShadow, styles.setting_button]}
          onPress={() => this.props.navigation.navigate('HomeSetting')} >
          <Text style={styles.button_title}>SETTING</Text>
        </TouchableOpacity>
      </View >
    )
  }
}