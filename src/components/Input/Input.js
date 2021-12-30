import React from 'react';
import {View, TextInput, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Input.style';
import iconSize from '../../styles/iconSize';
import colors from '../../styles/colors';

const Input = ({iconName, label, error, ...otherProps}) => {
  return (
    <View style={styles.container}>
      <View style={styles.label_container}>
        <Text style={styles.label}>{label}</Text>
        {error ? <Text style={styles.error_label}>{error}</Text> : null}
      </View>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.PlaceHolderTextColor}
          {...otherProps}
        />
        <Icon
          name={iconName}
          size={iconSize.small}
          color={colors.secondaryColor}
        />
      </View>
    </View>
  );
};
export default Input;
