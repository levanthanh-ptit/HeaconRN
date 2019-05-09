import React, { Component } from 'react'
import { View, FlatList, Clipboard } from 'react-native'
import { connect } from 'react-redux'
import axios from '../../../static/axios';
import { Styles, BubbleColor } from './ChatStyle'
import Bubble from './Bubble/Bubble'
import TypingBar from './TypingBar/TypingBar'
import I from '../UI/AppIcon'

export class Chat extends Component {
  state = {
    messages: null
    // id,
    // content,
    // date
    ,
    selectedBubble: null
    // id
    ,
  }
  constructor(props) {
    super(props)
  }
  async componentDidMount() {
    let token = this.props.Auth.token;
    if (!token) return;
    try {
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
              _id: e._id,
              id: e.id,
              content: e.text,
              date: new Date(e.date)
          }))
          await this.setState({
            messages: data
          })
      }
    } catch (error) {
      alert(error)
    }
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
      action: null,
      content: <I name={'send'} color={'#DC143C'} size={buttonIconSize} />,
      position: 'right'
    }
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
        />
        <TypingBar listAction={[addImageActtionButton, addActtionButton, sendActtionButton]}></TypingBar>
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

