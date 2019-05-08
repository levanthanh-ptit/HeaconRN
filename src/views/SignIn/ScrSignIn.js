import React, { Component } from 'react'
import Background from '../../components/UI/Background'
import SignIn from '../../components/Auth/SignIn';

export default class ScrSignIn extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Background>
        <SignIn navigation={this.props.navigation}/>
      </Background>
    )
  }
}
