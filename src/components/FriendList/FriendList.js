import React, { Component } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import FriendBlock from './FriendBlock'
import axios from '../../../static/axios'

export class FriendList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            friends: [
                // {
                //     friendId: '',
                //     friendImageUrl: '',
                //     name: '',
                //     lastMessage: '',
                // }
            ],
        };
    };
    async componentDidMount() {
        let token = this.props.Auth.token;
        if (!token) return;
        try {
            let res = await axios({
                method: 'POST',
                url: '/message/friends',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data: { token: token }
            })
            if (res.data.friend) {
                let data = await res.data.friend.map(e => ({
                    friendId: e.id,
                    name: e.name,
                    lastMessage: e.lastMessage,
                    lastTime: e.lastTime,
                }))
                await this.setState({
                    friends: data,
                    myId: res.data.id
                })
            }
        } catch (error) {
            alert(error)
        }

    }
     _onPressItem = async (friendId) => {
        var f_name = await this.state.friends.map(e => {
            if (e.friendId == friendId) return e.name
        })        
        await this.props.navigation.navigate('Chat', {
            myId: this.state.myId,
            idFriend: friendId,
            friendName: f_name,

        })
    }
    _keyExtractor = (item, index) => item.friendId;
    _renderFriendBock = ({ item }) => {
        return <FriendBlock
            key={item.friendId}
            id={item.friendId}
            friendImageUrl={item.friendImageUrl}
            friendName={item.name}
            friendLastMessage={item.lastMessage}
            onPress={this._onPressItem}
        />
    }

    render() {
        return (
            <FlatList
                style={Styles.FriendListMainContainer}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderFriendBock}
                extraData={this.state}
                data={this.state.friends}
                onPressItem={this._onPressItem}
            />
        )
    }
}

const Styles = StyleSheet.create({
    FriendListMainContainer: {
        width: "100%",
        display: 'flex',
        height: '100%',
        padding: 5,
    }
})

const mapStateToProps = (state) => ({
    Auth: state.Auth,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(FriendList)
