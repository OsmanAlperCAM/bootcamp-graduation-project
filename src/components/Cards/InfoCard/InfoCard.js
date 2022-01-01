import React from 'react';
import {View, Text} from 'react-native';
import styles from './InfoCard.style';

const InfoCard = ({title,text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
export default InfoCard;

