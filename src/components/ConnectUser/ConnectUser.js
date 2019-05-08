import React, { Component } from 'react'
import { View, Animated, Dimensions, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import I from '../UI/AppIcon';
const d_height = Dimensions.get('window').height;
const d_width = Dimensions.get('window').width;
export class ConnectUser extends Component {
    state = {
        Width: new Animated.Value(100),
        Height: new Animated.Value(100),
        BorderRadius: new Animated.Value(50),
    }
    componentDidMount() {
        Animated.timing(
            this.state.Height,
            {
                toValue: d_height,
                duration: 1000,
            }
        ).start();
        Animated.timing(
            this.state.Width,
            {
                toValue: d_width,
                duration: 1000,
            }
        ).start();
        Animated.timing(
            this.state.BorderRadius,
            {
                toValue: 0,
                duration: 1000,
            }
        ).start();
    }
    render() {
        return (
            <View style={Styles.ConnectUserContainer}>
                <Animated.View
                    style={{
                        ...Styles.HeartButton,
                        height : this.state.Height,
                        width : this.state.Width,
                        borderRadius: this.state.BorderRadius,
                    }}
                >
                    <I name='heart' color='#ffffff' size={70}/>
                </Animated.View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectUser)

const Styles = StyleSheet.create({
    ConnectUserContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    HeartButton:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 50,
    }
})
