import React from 'react';
import {View, Text} from 'react-native';
import InfoCard from '../InfoCard';
import styles from './StatusCard.style';

const StatusCard = ({
  title,
  distance,
  time,
  number,
  titleDistance = 'Total Distance',
  titleTime = 'Total Time',
  titleNumber = 'Total Activity',
  variant = 'default',
}) => {
  return (
    <View style={styles[variant].container}>
      {!!title && <Text style={styles[variant].title}>{title}</Text>}
      <View style={styles[variant].status_container}>
        <InfoCard title={titleDistance} text={distance} variant={variant} />
        <InfoCard title={titleTime} text={time} variant={variant} />
        <InfoCard title={titleNumber} text={number} variant={variant} />
      </View>
    </View>
  );
};
export default StatusCard;
