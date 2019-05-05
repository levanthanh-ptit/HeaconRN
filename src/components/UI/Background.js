import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

const Background = (props) => {
  return (
    <LinearGradient
    style= {Styles.Background}
    colors={['#1fa2ff', '#12d8fa', '#a6ffcb']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0.5 }}
    id={props.id}>
    {props.children}
  </LinearGradient>
  )
}
const Styles = StyleSheet.create({
  Background:{
    width: '100%',
    height: '100%',
  }
})

export default Background
