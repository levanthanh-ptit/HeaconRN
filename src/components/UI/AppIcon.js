import Icon from 'react-native-vector-icons/FontAwesome'
import React, { useState, useEffect } from 'react';

const AppIcon = (props) => {
  const [name, setName] = useState('info');
  const [color, setColor] = useState('#000000');
  const [size, setSize] = useState(30);
  useEffect(() => {
    if (props.name != null) setName(props.name);
    if (props.color != null) setColor(props.color);
    if (props.size != null) {
      switch (props.size) {
        case "small":
          setSize(20)
          break;
        case "medium":
          setSize(40)
          break;
        case "large":
          setSize(60)
          break;
        default:
          setSize(props.size)
          break;
      }
    }
    if (props.type === 'avatar') setName('user');
  }, [])
  return (<Icon name={name} color={color} size={size} />)
}
export default AppIcon
