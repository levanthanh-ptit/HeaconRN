import React, { Component } from 'react'
import { Text, View, FlatList, Clipboard } from 'react-native'
import { Styles, BubbleColor } from './ChatStyle'
import Bubble from './Bubble/Bubble'
import TypingBar from './TypingBar/TypingBar'
import I from '../UI/AppIcon'

export default class Chat extends Component {
  state = {
    messages: null
    // id,
    // content,
    // type,
    // date
    ,
    selectedBubble: null
    // id
    ,
  }
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    //fake date for loading from route path

    var mess = [];
    for (let i = 0; i < 11; i++) {
      var date = new Date();
      date.setHours(10);
      date.setMinutes(i);
      mess.push({
        id: i + '',
        content: <Text selectable={true}>{'abc ' + i + (i % 3 == 0 ? 'divide perfect for 3 divide perfect for 3' : '')}</Text>,
        type: (i % 2) == 0 ? 'my' : 'other',
        date: date
      });
    }
    this.setState({
      messages: mess,
      selectedBubble: null,
    })
  }

  _deleteItem = (id) => {
    var mess = this.state.messages.filter(e => {
      if (e.id != id) return true
    })
    this.setState({
      messages: mess
    })
  }
  _CopyContent = (id) => {
    var content = null
    this.state.messages.map(e => {
      if (e.id == id) content = e.content
    })
    Clipboard.setString(content.props.children);
  }
  _onPressItem = (id) => {
    var id = id == this.state.selectedBubble ? null : id;
    this.setState({
      selectedBubble: id,
    })
  }

  _keyExtractor = (item, index) => item.id;

  _renderBubble = ({ item }) => {
    var selected = this.state.selectedBubble === item.id;
    return <Bubble
      key={item.id}
      id={item.id}
      type={item.type}
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
          inverted={true}
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

