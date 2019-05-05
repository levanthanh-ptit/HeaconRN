import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import FriendBlock from './FriendBlock'
import ChatHeader from '../UI/ChatHeader';

export default class FriendList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        friends: [],
      };
    };
    async componentDidMount() {
        var { friends } = this.state;
        for (let i = 0; i < 3; i++) {
            await friends.push({
                friendId: '' + i,
                friendImageUrl: '',
                name: 'name ' + i,
                lastMessage: 'hello mothafaka ' + i,
            });
        }
        this.setState({
            friends: friends
        })
    }
    _onPressItem = (friendId) => {
        var f_name = this.state.friends.map( e =>{
            if(e.friendId==friendId) return e.name
        })
        // var chatHeader = <ChatHeader name={f_name}/>;
        this.props.navigation.navigate('Chat',{
            userId:'999999',
            targerId: friendId,
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
        // console.log(this.state);
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
