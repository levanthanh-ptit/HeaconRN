import React, { Component } from 'react'
import { AsyncStorage } from '@react-native-community/async-storage'
import { connect } from 'react-redux'
import { createAppContainer } from "react-navigation";
import { rootStack } from '../navigators/RootNavigator'
import { signStack } from '../navigators/SignNavigator'
import { sessionSignIn } from '../redux/actions/AuthAction'
const SignContainer = createAppContainer(signStack)
const AppContainer = createAppContainer(rootStack);
export class index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            logedIn: false,
        }
    }
    async componentDidMount() {
        try {
            let token = await AsyncStorage.getItem('token')
            if (token != null)
                this.props.sessionSignIn(token)
        } catch (error) {

        }
    }

    render() {
        return (
            this.props.Auth.token ?
                (
                    <AppContainer />
                ) : (
                    <SignContainer />
                )
        )
    }
}

const mapStateToProps = (state) => ({
    Auth: state.Auth,
})

const mapDispatchToProps = dispatch => ({
    sessionSignIn: (token) => dispatch(sessionSignIn(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
