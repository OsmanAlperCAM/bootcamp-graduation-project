import React from 'react';
import {View, Text} from 'react-native';
import InfoCard from '../InfoCard';
import styles from './StatusCard.style';

const StatusCard = ({distance, time, number}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name</Text>
      <View style={styles.status_container}>
        <InfoCard title="Total Distance" text={distance} />
        <InfoCard title="Total Time" text={time} />
        <InfoCard title="Total Activity" text={number} />
      </View>
    </View>
  );
};
export default StatusCard;
