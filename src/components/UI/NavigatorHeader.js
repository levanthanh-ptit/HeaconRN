import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class NavigatorHeader extends PureComponent {
    render() {
        return (
            <View style={[Styles.headerContainer, this.props.containerStyle]}>
                <Icon
                    style={Styles.backArrow}
                    name="arrow-left"
                    color="#ffffff"
                    size={20}
                    onPress={() => this.props.navigation.goBack()}
                />
                <Text style={this.props.titleStyle}>
                    {this.props.title}
                </Text>
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 15,
    },
    backArrow: {
        marginEnd: 20,
    },
    header: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }

})
