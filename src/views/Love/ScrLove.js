import React, { Component } from 'react'
import ConnectUser from '../../components/ConnectUser/ConnectUser';
import Background from '../../components/UI/Background';
import NavigatorHeader from '../../components/UI/NavigatorHeader'
export default class ScrLove extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: <NavigatorHeader navigation={navigation}/>,
      })
    render() {
        return (
            <Background>
                <ConnectUser navigation={this.props.navigation}/>
            </Background>       
        )
    }
}
