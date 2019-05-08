import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, TouchableOpacity } from 'react-native'
import { Styles } from './BubbleStyle'
import ExplandableView from '../../CustomAnimationView/ExplandableView'
import FadeInView from '../../CustomAnimationView/FadeInView'
import I from '../../UI/AppIcon';
export default class Bubble extends Component {
  static propTypes = {
    id: PropTypes.any,
    type: PropTypes.string,
    onPressItem: PropTypes.func,
    selected: PropTypes.bool,
    onPressAction: PropTypes.func,
    ActionElement: PropTypes.any,
    content: PropTypes.any,
    date: PropTypes.string,
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
        {(this.props.type == 'other') ? (
          this.props.avatar ? (
            this.props.avatar
          ) : (
              <View style={Styles.Avatar}>
                <I type='avatar' color='#ffffff' />
              </View>
            )
        ) : null}
        <View
          className='BubbleContent'
          style={Styles.BubbleContent}
        >
          {this.props.selected && <ExplandableView
            style={Styles.BubbleBefore}
          >
            <Text>{this.props.date}</Text>
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
          <TouchableOpacity
            className='AcctionButton'
            style={Styles.ActionButton}
            onPress={this._onPressAction}
          >
            {this.props.ActionElement}
          </TouchableOpacity>
        </FadeInView>}
      </View>
    )
  }
}
