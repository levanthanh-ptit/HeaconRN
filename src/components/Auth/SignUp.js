import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, DatePickerAndroid } from 'react-native'
import { Input, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux'
import { ThemeProvider } from 'react-native-elements'
export class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            elememts: [
                {
                    name: 'userName',
                    label: 'Tên tài khoản',
                    textContentType: 'userName',
                    secureTextEntry: false,
                    errorMessage: ""
                },
                {
                    name: 'password',
                    label: 'Mật khẩu',
                    textContentType: 'password',
                    secureTextEntry: true,
                    errorMessage: ""
                },
                // {
                //     name: 'confirmPassword',
                //     label: 'Nhập lại mật khẩu',
                //     textContentType: 'password',
                //     secureTextEntry: true,
                // },
                {
                    name: 'firstName',
                    label: 'Tên',
                    textContentType: 'name',
                    secureTextEntry: false,
                    errorMessage: ""
                },
                {
                    name: 'lastName',
                    label: 'Họ',
                    textContentType: 'name',
                    secureTextEntry: false,
                    errorMessage: ""
                },
                {
                    name: 'birthday',
                    label: 'Ngày sinh',
                    textContentType: null,
                    secureTextEntry: false,
                    errorMessage: "",
                    placeholder: "mm/dd/yyyy"
                },
                {
                    name: 'gender',
                    label: 'Giới tính',
                    option: [
                        {
                            label: 'Nam',
                            value: 'male'
                        },
                        {
                            label: 'Nữ',
                            value: 'female'
                        }
                    ]
                }
            ],
            userName: '',
            password: '',
            // confirmPassword: '',
            firstName: '',
            lastName: '',
            gender: 'male',
            birthday: '',
        }
    }
    _renderField() {
        return this.state.elememts.map(el => {
            if (el.name === 'gender') {
                var checkboxs = el.option.map(op => {
                    return <CheckBox
                        key={el.option.indexOf(op)}
                        containerStyle={Styles.checkBox}
                        textStyle={Styles.title}
                        title={op.label}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        uncheckedColor='#ffffff'
                        checked={this.state[el.name] === op.value}
                        onPress={() => this.onChange_handle(el.name, op.value)}
                    />
                })
                return <View key={el.name} style={Styles.inputBox}>
                    {checkboxs}
                </View>
            }
            else
                return <View key={el.name} style={Styles.inputBox}>
                    <Input
                        label={el.label}
                        labelStyle={Styles.title}
                        placeholder={el.placeholder}
                        textContentType={el.textContentType}
                        inputStyle={Styles.input}
                        onChangeText={e => this.onChange_handle(el.name, e)}
                        value={this.state[el.name]}
                        secureTextEntry={el.secureTextEntry}
                        errorMessage={el.errorMessage}
                    />
                </View>
        })
    }
    async onOpenDatePicker() {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: new Date(),
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                this.setState({
                    birthday: {
                        day,
                        month,
                        year
                    }
                })
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }
    validate(type, value) {
        switch (type) {
            case 'userName':
                return value.match(/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)
            case 'password':
                return value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
            case 'birthday':
                return Date.parse(value) > 0
            default:
                return true
        }
    }
    onChange_handle(name, value) {
        this.setState({
            [name]: value
        })
    }
    async onSubmit() {
        let stateProps = Object.getOwnPropertyNames(this.state);
        let elms = this.state.elememts;
        let isSubmitable = true;
        const except = ['elememts', 'firstName', 'lastName', 'gender']
        await except.map(e => {
            stateProps.splice(stateProps.indexOf(e), 1);
        })
        await stateProps.map(sp => {
            let valid = this.validate(sp, this.state[sp]);
            if (valid == false) isSubmitable == false;
            elms.map(e => {
                if (e.name === sp) {
                    e.errorMessage = valid ? '' : `${e.label} không hợp lệ`
                }
            })
        })
        await this.setState({
            elememts: elms
        })
        if (isSubmitable) await this.props.onSignUp()
    }
    render() {
        var elements = this._renderField();
        const birthday = (this.state.birthday.day && this.state.birthday.month && this.state.birthday.year) ?
            this.state.birthday.day + '/'
            + this.state.birthday.month + '/'
            + this.state.birthday.year
            : ''
        return (
            <ThemeProvider>
                <View style={Styles.signUpMainContainer}>
                    <Text style={Styles.h1}>Tạo tài khoản</Text>
                    {elements}
                    <TouchableOpacity
                        style={[Styles.inputBox, Styles.button]}
                        onPress={() => this.onSubmit()}
                    >
                        <Text style={Styles.btn_title}>Tạo</Text>
                    </TouchableOpacity >
                </View>
            </ThemeProvider>
        )
    }
}
const Styles = StyleSheet.create({
    scroll: {
        height: '100%',
        width: '100%',
    },
    signUpMainContainer: {
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    h1: {
        fontSize: 45,
        color: '#FF1493',
        marginBottom: 20,
    },
    checkBox: {
        backgroundColor: 'transparent',
        borderWidth: 0,
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
    },
    inputBox: {
        display: 'flex',
        alignItems: 'flex-start',
        width: '65%',
        marginBottom: 20,
    },
    nativeInputBox: {
        display: 'flex',
        alignItems: 'center',
        width: '65%',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    input: {
        width: '100%',
        fontSize: 20,
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingVertical: 5,
    },
    datePicker: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)',
        padding: 5,
        minHeight: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#888',
    },
    datePickerText: {
        fontSize: 20,
    },
    loginButton: {
        width: '50%',
    },
})
const mapStateToProps = (state) => ({
    Auth: state.Auth,
})

const mapDispatchToProps = dispatch = {
    onSignUp: null,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
