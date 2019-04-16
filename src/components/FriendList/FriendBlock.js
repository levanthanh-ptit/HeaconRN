import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

export default class FriendBlock extends Component {
    static propTypes = {
        friendImageUrl: PropTypes.string,
        friendName: PropTypes.string,
        friendLastMessage: PropTypes.string,
        onPress: PropTypes.func,
    }
    _calculateFriendDetailBoxSize = () => {
        var device_width = Dimensions.get('window').width;
        var FriendDetailBoxWidth = device_width - (Styles.friendAvatar.width + Styles.friendAvatar.margin * 2 + 10);
        return FriendDetailBoxWidth = FriendDetailBoxWidth * 100.0 / device_width + '%'
    }
    _onPress = () => {
        this.props.onPress(this.props.id)
    }
    render() {
        return (
            <TouchableOpacity style={Styles.friendBlockMainContainer}
                onPress={this._onPress}
            >
                <Image style={Styles.friendAvatar}
                // source={(this.props.friendImageUrl==='')?'src/static/assets/user-circle-solid.svg':this.props.friendImageUrl}
                />
                <View style={[Styles.friendDetail,]}>
                    <Text style={Styles.friendName}>
                        {this.props.friendName}
                    </Text>
                    <Text style={Styles.friendLastMessage}>
                        {this.props.friendLastMessage}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}   
const Styles = StyleSheet.create({
    friendBlockMainContainer: {
        width: '100%',
        minHeight: 70,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#eee',
        marginVertical: 5,
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
    },
    friendAvatar: {
        height: 50,
        width: 50,
        backgroundColor: 'pink',
        marginRight: 10,
        borderRadius: 25,
    },
    friendDetail: {
        flexGrow: 1,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 8,
    },
    friendName: {
        flexGrow: 1,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 19,
    },
    friendLastMessage: {
        flexGrow: 2,
        color: 'black',
        fontWeight: 'normal',
    }
})
