import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Provider } from 'react-redux'
import store from './src/redux/stores';
import { createAppContainer } from "react-navigation";
import { rootStack } from './src/navigators/RootNavigator'
import { signStack } from './src/navigators/SignNavigator'

const SignContainer = createAppContainer(signStack)
const AppContainer = createAppContainer(rootStack);

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      logedIn: false,
    }
  }

  async componentDidMount() {
    try {

    } catch (error) {

    }
  }
  render() {
    return (
      <Provider store={store}>
        {this.state.logedIn?(
          <AppContainer />
        ):(
          <SignContainer />
        )}
        
      </Provider>
    )
  }
}
