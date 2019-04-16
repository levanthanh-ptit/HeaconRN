import { StyleSheet, Dimensions } from 'react-native'
var {height, width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  appContentsScroll: {
    width: "100%",
  },
  WrapedContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: "100%",
    backgroundColor: 'pink',
    overflow: 'scroll',
    paddingVertical: 6,
  }
})
