import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Input.style';
import iconSize from '../../styles/iconSize';
import colors from '../../styles/colors';

const Input = ({iconName, ...otherProps}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={colors.PlaceHolderTextColor}
        {...otherProps}
      />
      <Icon name={iconName} size={iconSize.small} color={colors.secondaryColor} />
    </View>
  );
};
export default Input;
