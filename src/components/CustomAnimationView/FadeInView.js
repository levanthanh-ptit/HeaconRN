import React, { Component } from 'react'
import { Animated, View } from 'react-native'

export default class FadeInView extends Component {
    state = {
        fade: new Animated.Value(0),
    }
    componentDidMount() {
        Animated.timing(
            this.state.fade,
            {
                toValue: 1,
                duration: 250,
            }
        ).start()
    }
    render() {
        let { fade } = this.state;

        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    opacity: fade,
                }}
            >
                {this.props.children}
            </Animated.View>
        )
    }
}
