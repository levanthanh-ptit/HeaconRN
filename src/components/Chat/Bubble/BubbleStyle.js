import { StyleSheet, Dimensions } from 'react-native'
var { height, width } = Dimensions.get('window');
import * as Color from '../Color'
export const Styles = StyleSheet.create({
  WrapBubbleContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  WrapBubbleContainerLeft: {
    flexDirection: 'row',
  },
  Avatar:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: 'pink',
  },
  BubbleContent: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '65%',
    marginHorizontal: 5,
  },
  Bubble: {
    padding: 10,
    borderRadius: 20,
    color: 'white',
    backgroundColor: Color.blue,
    fontSize: 16,
  },
  BubbleBefore:{
    color: Color.grey,
    height: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  BubbleAfter:{
    color: Color.grey,
    height: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  BubbleSelected: {
    backgroundColor: Color.darkBlue,
  },
  BubbleLeft: {
    color: 'black',
    backgroundColor: Color.grey,
  },
  BubbleLeftSelected: {
    backgroundColor: Color.darkGrey,
  },
  ActionButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 25,
    backgroundColor: Color.grey,
  },
});
export const BubbleColor = StyleSheet.create({
  'blue': {
    backgroundColor: Color.blue
  },
  'red': {
    backgroundColor: Color.red
  },
  'grey': {
    backgroundColor: Color.grey
  }
})

