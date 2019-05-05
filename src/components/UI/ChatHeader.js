import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class ChatHeader extends Component {
    render() {
        return (
            <View style={Styles.ChatHeader}>
                {this.props.avatar?(
                    <Image style={Styles.FriendAvatar} />
                ):(
                    <View style={Styles.FriendAvatar}>
                        {this.props.defaultAvatar}
                    </View>
                )}
                <View style={Styles.FriendInfo} >
                    <Text style={Styles.FriendName}>{this.props.name}</Text>
                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    ChatHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    FriendAvatar: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: 'pink',
        marginRight: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    FriendInfo: {
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    FriendName: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 15,
    }
})
