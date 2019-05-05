import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/stores';
import Index from './src/views/index';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Index/>
      </Provider>
    )
  }
}
