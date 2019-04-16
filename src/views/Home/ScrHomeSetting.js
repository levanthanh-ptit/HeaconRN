import React, { Component } from 'react'
import { View } from 'react-native'
import HomeSetting from '../../components/Home/HomeSetting/HomeSetting'
export default class ScrHomeSetting extends Component {
  static navigationOptions = {
    title: 'Setting',
  };
  render() {
    return (
      <View>
        <HomeSetting></HomeSetting>
      </View>
    )
  }
}
