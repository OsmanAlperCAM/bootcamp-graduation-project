import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';
import styles from './CircleButton.style';

const FloatingActionButton = ({iconName,size = 'normal'}) => {
  const iconSize = size == 'normal' ? 30 : size == 'big' ? 80 : 30;
  return (
    <TouchableOpacity style={styles[size].container}>
      <Icon name={iconName} size={iconSize} color={colors.secondaryTextColor}/>
    </TouchableOpacity>
  );
};
export default FloatingActionButton;
