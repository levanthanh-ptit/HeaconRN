import Icon from 'react-native-vector-icons/FontAwesome'
import React, { useState, useEffect} from 'react';

const AppIcon = (props) => {
    const [name, setName] = useState('info');
    const [color, setColor] = useState('#ffffff');
    const [size, setSize] = useState(30);
    useEffect(() => {
      if(props.name)setName(props.name);
      if(props.color)setColor(props.color);
      if(props.size)setSize(props.size);
    }, [])  
    return (<Icon name={name} color={color} size={size} />)
}
export default AppIcon
