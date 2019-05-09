import React, { Component } from 'react'
import { View, FlatList, Clipboard } from 'react-native'
import { connect } from 'react-redux'
import axios from '../../../static/axios'
import openSocket from 'socket.io-client'
import constant from '../../../static/constant';
import { Styles } from './ChatStyle'
import Bubble from './Bubble/Bubble'
import TypingBar from './TypingBar/TypingBar'
import I from '../UI/AppIcon'
const uuidv1 = require('uuid/v1')
var socket;

export class Chat extends Component {

  constructor(props) {
    super(props)
    this.emitMessage = this.emitMessage.bind(this)
    this.state = {
      loading: false,
      messages: []
      // _id,
      // id,
      // content,
      // date
      ,
      selectedBubble: null
      // id
      ,
      inputText: ''
    }
  }
  async componentDidMount() {
    let token = this.props.Auth.token;
    if (!token) return;
    try {
      await this.setState({
        loading: true
      })
      let res = await axios({
        method: 'POST',
        url: '/message/load',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          token: token,
          idFriend: this.props.idFriend
        }
      })
      if (res.data) {
        let data = [];
        data = await res.data.map(e => ({
          _id: uuidv1(),
          id: e.id,
          content: e.text,
          date: new Date(e.date)
        }))
        await this.setState({
          messages: data
        })
        //open socket for recive and send mesage
        socket = openSocket(constant.server);
        socket.emit('CLIENT_CONNECT_MESSAGE', { token });
        socket.on('SEND_MESSAGE_TO_CLIENT', data => this.onReceiveMessage(data))
        await this.setState({
          loading: false
        })
      }
    } catch (error) {
      alert(error)
    }

  }
  onReceiveMessage(data) {
    console.log('data');
    console.log(data);
    let _id = uuidv1();
    let id = data.id;
    let content = data.text;
    let date = new Date(data.date);
    this.setState({
      messages: [
        ...this.state.messages,
        {
          _id,
          id,
          content,
          date
        }],
    })

  }
  async emitMessage() {
    try {
      await socket.emit('CLIENT_SEND_MESSAGE', {
        token: this.props.Auth.token,
        message: {
          idFriend: this.props.idFriend,
          text: this.state.inputText,
        }
      })
      await this.setState({
        inputText: ''
      })
    } catch (error) {
      alert(error)
    }
  }
  onChange_handle(name, value) {
    this.setState({
      [name]: value
    })
  }
  _deleteItem = (_id) => {
    var mess = this.state.messages.filter(e => {
      if (e._id != _id) return true
    })
    this.setState({
      messages: mess
    })
  }
  _CopyContent = (_id) => {
    var content = null
    this.state.messages.map(e => {
      if (e._id == _id) content = e.content
    })
    Clipboard.setString(content);
  }
  _onPressItem = (_id) => {
    let id = _id == this.state.selectedBubble ? null : _id;
    this.setState({
      selectedBubble: id,
    })
  }

  _keyExtractor = (item, index) => item._id;

  _renderBubble = ({ item }) => {
    var selected = this.state.selectedBubble === item._id;
    return <Bubble
      key={item._id}
      _id={item._id}
      myId={this.props.myId}
      id={item.id}
      onPressItem={this._onPressItem}
      selected={selected}
      onPressAction={this._CopyContent}
      ActionElement={<I name="copy" color='#444' size='small' />}
      content={item.content}
      date={item.date.getHours() + ':' + item.date.getMinutes()}
    ></Bubble>
  }

  render() {
    if (this.state.loading) return false
    const buttonIconSize = 20;
    const buttonIconColor = '#666';
    var addActtionButton = {
      id: 1,
      action: null,
      content: <I name={'smile-o'} color={buttonIconColor} size={buttonIconSize} />,
      position: 'left'
    }
    var addImageActtionButton = {
      id: 2,
      action: null,
      content: <I name={'image'} color={buttonIconColor} size={buttonIconSize} />,
      position: 'left'
    }
    var sendActtionButton = {
      id: 3,
      action: this.emitMessage,
      content: <I name={'send'} color={'#DC143C'} size={buttonIconSize} />,
      position: 'right',
    }
    console.log(this.state.messages.length);

    return (
      <View
        id='ChatContainer'
        style={Styles.ChatContainer}
      >
        <FlatList
          id='ChatList'
          style={Styles.ListBubbleWrapedContainer}
          data={this.state.messages}
          extraData={this.state}
          renderItem={this._renderBubble}
          keyExtractor={this._keyExtractor}
          initialScrollIndex={this.state.messages?this.state.messages.length-1:0}
        />
        <TypingBar
          listAction={[addImageActtionButton, addActtionButton, sendActtionButton]}
          onChange_inputText={(e) => this.onChange_handle("inputText", e)}
          inputText_value={this.state.inputText}
        />
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  Auth: state.Auth,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Chat)

