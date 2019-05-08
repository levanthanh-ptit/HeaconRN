import React, { Component } from 'react'
import { View } from 'react-native'
import Home from '../../components/Home/Home'
import Background from '../../components/UI/Background';

export default class SrcHome extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Background id='HomeContainer'>
        <Home navigation={this.props.navigation}></Home>
      </Background>
    )
  }
}
