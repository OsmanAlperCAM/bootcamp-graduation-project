import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Button.style';

const Button = ({title,onPress, variant = 'default'}) => {
  return (
    <TouchableOpacity
      style={styles[variant].container}
      onPress={onPress}>
      <Text style={styles[variant].title}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
