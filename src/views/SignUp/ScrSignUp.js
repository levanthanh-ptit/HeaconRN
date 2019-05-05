import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Background from '../../components/UI/Background'
import SignUp from '../../components/Auth/SignUp'
import NavigatorHeader from '../../components/UI/NavigatorHeader';
export default class ScrSignUp extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <NavigatorHeader navigation={navigation}/>,
  })
  render() {
    return (
      <Background>
        <ScrollView style={Styles.scroll}>
          <SignUp />
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
