import React from 'react';
import {View, Text} from 'react-native';
import InfoCard from '../InfoCard';
import styles from './StatusCard.style';

const StatusCard = ({title,distance, time, number, variant = 'default'}) => {
  return (
    <View style={styles[variant].container}>
      <Text style={styles[variant].title}>{title}</Text>
      <View style={styles[variant].status_container}>
        <InfoCard title="Total Distance" text={distance} variant={variant} />
        <InfoCard title="Total Time" text={time} variant={variant} />
        <InfoCard title="Total Activity" text={number} variant={variant} />
      </View>
    </View>
  );
};
export default StatusCard;
