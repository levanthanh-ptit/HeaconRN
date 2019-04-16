import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class ChatHeader extends Component {
    
  render() {
    return (
      <View style={Styles.HeaderContainer}>
        <Image  style={Styles.HeaderAvatar}/>
        <Text>{}</Text>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
    HeaderContainer:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    HeaderAvatar:{
        height: 50,
        width: 50,
    },

})
