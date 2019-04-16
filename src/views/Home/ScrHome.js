import React, { Component } from 'react'
import { View } from 'react-native'
import Home from '../../components/Home/Home'
export default class SrcHome extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View id='HomeContainer'>
        <Home navigation = {this.props.navigation}></Home>
      </View>
    )
  }
}
