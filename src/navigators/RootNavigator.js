import { createStackNavigator } from "react-navigation"
import ScrHome from '../views/Home/ScrHome'
import ScrChat from '../views/Chat/ScrChat'
import ScrFriendList from '../views/FriendList/ScrFriendList'
import ScrInfo from '../views/Info/ScrInfo'
import ScrLove from '../views/Love/ScrLove';
export const rootStack = createStackNavigator(
  {
    Home: ScrHome,
    Chat: ScrChat,
    FriendList: ScrFriendList,
    Info: ScrInfo,
    Love: ScrLove,
  },
  {
    initialRouteName: 'Home',
  }
);
