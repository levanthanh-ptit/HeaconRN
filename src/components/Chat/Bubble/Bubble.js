import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { Styles } from './BubbleStyle'
import ExplandableView from '../../CustomAnimationView/ExplandableView'
import FadeInView from '../../CustomAnimationView/FadeInView'

export default class Bubble extends Component {
  static propTypes = {
    id: PropTypes.any,
    type: PropTypes.string,
    onPressItem: PropTypes.func,
    selected: PropTypes.bool,
    onPressAction: PropTypes.func,
    ActionElement: PropTypes.func,
    content: PropTypes.any,
  }
  _onPressBubble = () => {
    this.props.onPressItem(this.props.id);
    this.setState({

    })
  };
  _onPressAction = () => {
    this.props.onPressAction(this.props.id)
  }
  render() {
    var GroupContainerStyle = [Styles.WrapBubbleContainer];
    var bubbleStyle = [Styles.Bubble];
    if (this.props.type == 'other') {
      GroupContainerStyle.push(Styles.WrapBubbleContainerLeft);
      bubbleStyle.push(Styles.BubbleLeft);
      if (this.props.selected) {
        bubbleStyle.push(Styles.BubbleLeftSelected);
      }
    }
    else if (this.props.selected) {
      bubbleStyle.push(Styles.BubbleSelected);
    }
    return (
      <View
        className='GroupContainer'
        style={GroupContainerStyle}
      >
        <View
          className='BubbleContent'
          style={Styles.BubbleContent}
        >
          {this.props.selected && <ExplandableView
            style={Styles.BubbleBefore}
          >
            <Text> 10:24 </Text>
          </ExplandableView>}
          {React.cloneElement(this.props.content,
            {
              style: bubbleStyle,
              onPress: this._onPressBubble
            }
          )
          }
          {this.props.selected && <ExplandableView
            className="bubble-detail"
            style={Styles.BubbleAfter}
          >
            <Text> seen </Text>
          </ExplandableView>}
        </View>

        {this.props.selected && <FadeInView>
          <Text
            className='AcctionButton'
            style={Styles.ActionButton}
            onPress={this._onPressAction}
          >
            Xoa
        </Text>
        </FadeInView>}
      </View>
    )
  }
}
