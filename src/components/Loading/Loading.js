import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import colors from '../../styles/colors';
import styles from './Loading.style'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.secondaryColor}/>
    </View>
  );
};
export default Loading;
