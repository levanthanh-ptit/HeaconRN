import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux'
import { createAppContainer } from "react-navigation"
import { rootStack } from '../navigators/RootNavigator'
import { signStack } from '../navigators/SignNavigator'
import { sessionSignIn } from '../redux/actions/AuthAction'
import Background from '../components/UI/Background'

const SignContainer = createAppContainer(signStack)
const AppContainer = createAppContainer(rootStack)
export class index extends Component {
    constructor(props) {
        super(props)
        this._bootstrap_Auth = this._bootstrap_Auth.bind(this)
        this._bootstrap_Auth()
    }
    async _bootstrap_Auth() {
        try {
            console.log("_bootstrap_Auth");
            let token = await AsyncStorage.getItem('token');
            if (token != null)
                await this.props.sessionSignIn(token);
            return token
        } catch (error) {
            console.log("_bootstrap_Auth:::error");
            console.log(error);

        }
    }

    render() {
        return (
            <Background>
                {this.props.Auth.token ?
                    (
                        <AppContainer />
                    ) : (
                        <SignContainer />
                    )
                    }
            </Background>

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
