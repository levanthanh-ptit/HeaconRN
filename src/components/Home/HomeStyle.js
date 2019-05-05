import { StyleSheet, Dimensions } from 'react-native'
var { height, width } = Dimensions.get('window');
export const Styles = StyleSheet.create({
  
  WrapedContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    minHeight: '100%',
    padding: 30,
  },
  boxWithShadow: {
    shadowColor: 'white',
    shadowOffset: { width: 50, height: 50 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 50,
  },
  button: {
    width: 70,
    position: 'relative',
    height: 70,
    borderRadius: 35,
    marginVertical: 20,
    backgroundColor: 'dodgerblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_small:{
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  btn_medium:{
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  btn_large:{
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  btn_border_dash:{
    borderWidth: 4,
    borderColor: '#ffffff',
    borderStyle: 'dashed',
  },
  btn_title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  balloon:{
    borderBottomRightRadius: 10,
    transform:[{ rotate: '45deg' }]
  },
  balloon_title:{
    zIndex: 3,
    transform:[{ rotate: '-45deg' }]
  },
  balloon_rope_box:{
    position: 'absolute',
    zIndex: 1,
    top: "100%",
    left: "100%",
    width: "50%",
    height:"50%",
  },
  balloon_rope:{   
    position: 'absolute', 
    width: "100%", 
    height: 0,
    top: "50%",
    borderStyle: 'dashed',
    borderTopWidth: 3,
    marginTop: -2,
    borderColor: '#fff',
    transform:[{ rotate: '45deg'}, {scaleX:1.51421356237}],    
  },
  balloon_rope_big:{
    borderTopWidth: 4,
    marginTop: -2,
  },
  matching_button:{
    alignSelf: 'flex-start',
    backgroundColor: 'red',
    width: 160,
    height: 160,
    borderRadius: 80,
    marginLeft: 10,
    marginTop: 70,
  },
  chat_button:{
    alignSelf: 'flex-end',
    borderBottomRightRadius: 10,
  },
  info_button:{
    backgroundColor: 'pink',
    alignSelf: 'flex-end',
    marginTop: 0,
    marginBottom: 50,
    borderBottomRightRadius: 8,
  },
  icon:{
    color: '#ffffff',
    fontSize: 90,
    fontWeight: '500',
  }
})
