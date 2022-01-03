import React from 'react';
import {View, Text} from 'react-native';
import InfoCard from '../InfoCard';
import WeatherCard from '../WeatherCard';
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
  weather,
}) => {
  return (
    <View style={styles[variant].container}>
      {!!title && <Text style={styles[variant].title}>{title}</Text>}
      <View style={styles[variant].status_container}>
        <InfoCard title={titleDistance} text={distance} variant={variant} />
        <InfoCard title={titleTime} text={time} variant={variant} />
        <InfoCard title={titleNumber} text={number} variant={variant} />
        {!!weather && (
          <WeatherCard
            icon={weather.icon}
            degree={weather.degree}
            title={weather.title}
            humidity={weather.humidity}
          />
        )}
      </View>
    </View>
  );
};
export default StatusCard;
