import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';
import styles from './CircleButton.style';

const FloatingActionButton = ({
  iconName,
  iconColor = 'secondaryTextColor',
  size = 'normal',
  onPress,
  onLongPress,
}) => {
  const iconSize = size == 'normal' ? 30 : size == 'big' ? 60 : 30;
  return (
    <TouchableOpacity style={styles[size].container} onPress={onPress} onLongPress={onLongPress}>
      <Icon name={iconName} size={iconSize} color={colors[iconColor]} />
    </TouchableOpacity>
  );
};
export default FloatingActionButton;
