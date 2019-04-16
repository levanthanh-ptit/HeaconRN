import { createStackNavigator } from "react-navigation"
import ScrHome from '../views/Home/ScrHome'
import ScrHomeSetting from '../views/Home/ScrHomeSetting'
import ScrChat from '../views/Chat/ScrChat'
import ScrChatSetting from '../views/Chat/ScrChatSetting' 
import ScrFriendList from '../views/FriendList/ScrFriendList'
export const rootStack = createStackNavigator(
  {
    Home: ScrHome,
    HomeSetting: ScrHomeSetting,
    Chat: ScrChat,
    ChatSetting: ScrChatSetting,
    FriendList: ScrFriendList,
  },
  {
    initialRouteName: 'Home',
  }
);
