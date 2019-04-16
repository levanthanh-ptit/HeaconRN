import { StyleSheet, Dimensions } from 'react-native'
var { height, width } = Dimensions.get('window');
export const styles = StyleSheet.create({
  appContentsScroll: {
    width: "100%",
  },
  WrapedContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#ffaab8',
  },
  boxWithShadow: {
    shadowColor: 'white',
    shadowOffset: { width: 50, height: 50 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 50,
  },
  button: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 20,
    backgroundColor: 'dodgerblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  matching_button:{
    backgroundColor: 'red',
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  chat_button:{
    marginLeft: 170,
  },
  setting_button:{
    backgroundColor: 'gold',
    marginRight: 170,
  },
  icon:{
    color: 'white',
    fontSize: 60,
    fontWeight: '500',
  }
})
