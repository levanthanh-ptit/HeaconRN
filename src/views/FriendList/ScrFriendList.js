import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import FriendList from '../../components/FriendList/FriendList'
import Background from '../../components/UI/Background'

export default class ScrFriendList extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle:
            <View style={Styles.navigationHeader}>
                <Text style={Styles.navigationTitle}>Friend list</Text>
            </View>,
        headerStyle: {
            // backgroundColor: 'blue',
        }
    });
    render() {
        return (
            <Background
                id='FriendListContainer'>
                <FriendList navigation={this.props.navigation} />
            </Background>

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
        color: '#333'
    },
})

