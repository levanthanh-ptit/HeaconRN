import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { signIn } from '../../redux/actions/AuthAction';

export class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: 'a',
            password: 'a',
        }
    }
    redirect(path, param) {
        this.props.navigation.navigate(path, param)
    }
    onChange_handle(name, value) {
        this.setState({
            [name]: value
        })
    }
    onSubmit() {
        this.props.onSignIn(this.state.userName, this.state.password)
    }
    render() {
        return (
            <View style={Styles.signInMainContainer}>
                <Text style={Styles.h1}>Đăng Nhập</Text>
                <View style={Styles.inputBox}>
                    <Text
                        style={Styles.title}
                    >Tài khoản</Text>
                    <TextInput
                        textContentType='username'
                        style={Styles.input}
                        onChangeText={e => this.onChange_handle('userName', e)}
                        value={this.state.userName} />
                </View>
                <View style={Styles.inputBox}>
                    <Text
                        style={Styles.title}
                    >Mật khẩu</Text>
                    <TextInput
                        textContentType='password'
                        secureTextEntry={true}
                        style={Styles.input}
                        onChangeText={e => this.onChange_handle('password', e)}
                        value={this.state.password} />
                </View>
                {(this.props.Auth.signinStatus === 'fail') && <Text style={Styles.errorMessage}>
                    Sai thông tin đăng nhập
                    </Text>}
                <TouchableOpacity
                    style={[Styles.inputBox, Styles.button]}
                    onPress={() => this.onSubmit()}
                >
                    <Text style={Styles.btn_title}>Đăng Nhập</Text>
                </TouchableOpacity >
                <TouchableOpacity
                    onPress={() => this.redirect('SignUp', null)}
                >
                    <Text
                        style={Styles.signUpText}
                    >Chưa có tài khoản?</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    signInMainContainer: {
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    h1: {
        fontSize: 45,
        color: '#FF1493',
        marginBottom: 20,
    },
    inputBox: {
        display: 'flex',
        alignItems: 'flex-start',
        width: '60%',
        marginBottom: 20,
    },
    title: {
        height: 30,
        fontSize: 25
    },
    errorMessage: {
        height: 30,
        fontSize: 25,
        color: 'red',
    },
    input: {
        width: '100%',
        fontSize: 20,
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#ffffff',
    },
    loginButton: {
        width: '50%',
    },
    signUpText: {
        color: 'red',
        fontSize: 16,
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF4500',
        padding: 5,
        marginVertical: 20,
    },
    btn_title: {
        color: '#ffffff',
        fontSize: 25,
    }
})

const mapStateToProps = (state) => ({
    Auth: state.Auth,
})

const mapDispatchToProps = dispatch => ({
    onSignIn: (userName, password) => dispatch(signIn(userName, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
