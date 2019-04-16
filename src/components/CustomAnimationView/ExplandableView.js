import React, { Component } from 'react'
import { View, Animated } from 'react-native'
export default class ExpandableView extends Component {
  state = {
    theHeight: new Animated.Value(0),
  }
  componentDidMount() {
    Animated.timing(
      this.state.theHeight,
      {
        toValue: 20,
        duration: 250,
      }
    ).start();
  }
  render() {
    let { theHeight } = this.state;
    return (
      <Animated.View
        style={{
          ...this.props.style,
          height: theHeight,
        }}
      >
        {this.props.children}

      </Animated.View>
    );
  }
}