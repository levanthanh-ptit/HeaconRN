import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import I from '../UI/AppIcon'

export default class FriendBlock extends Component {
    static propTypes = {
        friendImageUrl: PropTypes.string,
        friendName: PropTypes.string,
        friendLastMessage: PropTypes.string,
        onPress: PropTypes.func,
    }
    _onPress = () => {
        this.props.onPress(this.props.id)        
    }
    render() {
        return (
            <TouchableOpacity style={Styles.friendBlockMainContainer}
                onPress={this._onPress}
            >
                <View style={Styles.friendAvatar}>
                    {this.props.avatar ? (
                        null
                    ) : (
                            <I type="avatar"
                                color={Styles.friendAvatar.color}
                                size={Styles.friendAvatar.fontSize}
                            />
                        )}
                </View>

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
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        marginRight: 10,
        borderRadius: 25,
        fontSize: 30,
        color: "#ffffff",
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
