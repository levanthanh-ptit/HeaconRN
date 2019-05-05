import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { createAppContainer } from "react-navigation";
import { rootStack } from '../navigators/RootNavigator'
import { signStack } from '../navigators/SignNavigator'
import {sessionSignIn} from '../redux/actions/AuthAction'
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
            let token = AsyncStorage.getItem('token')
            this.props.sessionSignIn(token)
        } catch (error) {

        }
    }
    async componentDidUpdate(prevProps, prevState) {
        console.log("update");
        console.log(this.props.Auth);
        
        if (prevProps.Auth.token != this.props.Auth.token) {
            if (this.props.Auth.token)
                await this.setState({
                    logedIn: true
                })
            else
                await this.setState({
                    logedIn: false
                })
        }
    }
    render() {
        console.log(this.props.Auth.token);

        return (
            this.state.logedIn ?
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
