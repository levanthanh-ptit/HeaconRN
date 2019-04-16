import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import FriendList from '../../components/FriendList/FriendList'
export default class ScrFriendList extends Component {
    static navigationOptions = ({ navigation }) => {
        return <View style={Styles.navigationHeader}>
            <Text style={Styles.navigationTitle}>Friend list</Text>
        </View>
    };
    render() {
        return (
            <FriendList navigation={this.props.navigation}/>
        )
    }
}
const Styles = StyleSheet.create({
    navigationHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    navigationTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})

