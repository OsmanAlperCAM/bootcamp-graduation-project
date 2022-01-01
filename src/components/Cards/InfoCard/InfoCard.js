import React from 'react';
import {View, Text} from 'react-native';
import styles from './InfoCard.style';

const InfoCard = ({title,text,variant='default'}) => {
  return (
    <View style={styles[variant].container}>
      <Text style={styles[variant].text}>{text}</Text>
      <Text style={styles[variant].title}>{title}</Text>
    </View>
  );
};
export default InfoCard;

