import React, { Component } from 'react'
import { createAppContainer } from "react-navigation";
import { rootStack } from './src/navigators/RootNavigator'

const AppContainer = createAppContainer(rootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
