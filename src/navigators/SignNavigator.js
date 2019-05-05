import { createStackNavigator } from "react-navigation"
import ScrSignIn from '../views/SignIn/ScrSignIn';
import ScrSignUp from '../views/SignUp/ScrSignUp';
export const signStack = createStackNavigator(
    {
        SignIn: ScrSignIn,
        SignUp: ScrSignUp,
    },
    {
        initialRouteName: 'SignIn',
    }
)