import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import { Styles } from './HomeStyle'
import I from '../UI/AppIcon';

export default class Home extends Component {
  redirect = (path, param) => {
    this.props.navigation.navigate(path, param)
  }
  render() {
    return (
      <View id='SettingContainer'
        style={Styles.WrapedContainer}
      >
        <TouchableOpacity
          style={[Styles.button, Styles.boxWithShadow, Styles.balloon, Styles.info_button]}
          onPress={() => this.redirect('Info', null)} >
          <View style={[Styles.balloon_title]}>
            <I type="avatar" color="#ffffff" size="medium" />
          </View>
          <View style={[Styles.balloon_rope_box]}>
            <View style={[Styles.balloon_rope]}></View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.button, Styles.boxWithShadow, Styles.balloon, Styles.matching_button]}
          onPress={() => this.redirect('Love', null)} >
          <View style={[Styles.icon, Styles.balloon_title]}>
            <I name="heart" color="#ffffff" size="large" />
          </View>

          {/* balloon rope css */}
          <View style={[Styles.balloon_rope_box]}>
            <View style={[Styles.balloon_rope]}></View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.button, Styles.btn_large, Styles.boxWithShadow, Styles.balloon, Styles.chat_button]}
          title="chat"
          onPress={() => this.redirect('FriendList')}>
          <Text style={[Styles.btn_title, Styles.balloon_title]}>FRIENDS</Text>

          {/* balloon rope css */}
          <View style={[Styles.balloon_rope_box]}>
            <View style={[Styles.balloon_rope]}></View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}