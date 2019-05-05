import { createStackNavigator } from "react-navigation"
import ScrHome from '../views/Home/ScrHome'
import ScrChat from '../views/Chat/ScrChat'
import ScrFriendList from '../views/FriendList/ScrFriendList'
export const rootStack = createStackNavigator(
  {
    Home: ScrHome,
    Chat: ScrChat,
    FriendList: ScrFriendList,
  },
  {
    initialRouteName: 'Home',
  }
);
