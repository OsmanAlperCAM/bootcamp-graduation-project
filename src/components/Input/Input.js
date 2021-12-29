import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Input.style';
import iconSize from '../../styles/iconSize';
import colors from '../../styles/colors';

const Input = ({iconName, ...otherProps}) => {
  const theme = useSelector(state => state.theme);
  const placeHolderColor =
    theme === 'light'
      ? colors[theme].placeholderTextColor
      : colors[theme].placeholderTextColor;

  return (
    <View style={styles[theme].container}>
      <TextInput
        style={styles[theme].input}
        placeholderTextColor={placeHolderColor}
        {...otherProps}
      />
      <Icon name={iconName} size={iconSize.small} color={placeHolderColor} />
    </View>
  );
};
export default Input;
