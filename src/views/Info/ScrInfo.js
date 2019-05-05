import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Background from '../../components/UI/Background'
import Info from '../../components/Info/Info'
import NavigatorHeader from '../../components/UI/NavigatorHeader';
export default class ScrInfo extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <NavigatorHeader navigation={navigation}/>,
  })
  render() {
    return (
      <Background>
        <ScrollView style={Styles.scroll}>
          <Info />
        </ScrollView>
      </Background>
    )
  }
}

const Styles = StyleSheet.create({
  scroll: {
    height: '100%',
    width: '100%',
  }
})
