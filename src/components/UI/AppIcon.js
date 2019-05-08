import Icon from 'react-native-vector-icons/FontAwesome'
import React, { Component } from 'react'
export default class AppIcon extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'info',
      color: '#000000',
      size: 30,
    };
  };
  componentDidMount() {
    if (this.props.name != null) this.setState({
      name: this.props.name
    });
    if (this.props.color != null) this.setState({
      color: this.props.color
    });
    if (this.props.size != null) {
      switch (this.props.size) {
        case "small":
          this.setState({
            size: 20
          });
          break;
        case "medium":
          this.setState({
            size: 40
          });
          break;
        case "large":
          this.setState({
            size: 60
          });
          break;
        default:
          this.setState({
            size: this.props.size
          });
          break;
      };
    }
    if (this.props.type === 'avatar') this.setState({
      name: 'user'
    });
  }
  render() {
    return (<Icon name={this.state.name} color={this.state.color} size={this.state.size} />)
  }
}
