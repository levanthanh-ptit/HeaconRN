import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet, View, Dimensions, TextInput } from 'react-native'
import * as Color from '../Color'

export default class TypingBar extends Component {
    static propTypes = {
        listAction: PropTypes.array,
        textSubmitAction: PropTypes.func,
    }

    _renderActionButton = (key, content) => 
        <View
            key={key}
            style={Style.TypingActionButton}
        >
            {content}
        </View>
    
    _renderListActionButtons = (position) => {
        return this.props.listAction.map(a =>{
            if(a.position === position) return this._renderActionButton(a.id, a.content)
        }
        );
    }
    _calculateTypingBoxSize = () =>{
        var { width } = Dimensions.get('window')
        var TypingBoxWidth = width - Style.TypingBarContainer.padding;
        this.props.listAction.map(() => {
            TypingBoxWidth -= (Style.TypingActionButton.width 
                + Style.TypingActionButton.margin*2
                );
        });
        TypingBoxWidth -= Style.TypingBox.margin*2;
        TypingBoxWidth = TypingBoxWidth*100.0/width + '%';
        return TypingBoxWidth
    }
    render() {
        
        return (
            <View style={Style.TypingBarContainer}>
                {this._renderListActionButtons('left')}
                <TextInput style={[Style.TypingBox, { width: this._calculateTypingBoxSize() }]}>
                </TextInput>
                {this._renderListActionButtons('right')}
            </View>
        )
    }
}
TypingBar.PropTypes
const Style = StyleSheet.create({
    TypingBarContainer: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        padding: 2,

    },
    TypingActionButton: {
        display: 'flex',
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
    },
    TypingBox: {
        display: 'flex',
        flexDirection: 'row',
        height: 40,
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingRight: 45,
        margin: 2,
        borderWidth: 1,
        borderColor: 'red',
        fontSize: 16,
    }
})
