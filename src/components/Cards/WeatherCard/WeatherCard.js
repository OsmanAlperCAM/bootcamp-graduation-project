import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './WeatherCard.style';

const WeatherCard = ({icon, degree, title, humidity}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon_container}>
        <Image
          style={styles.icon}
          source={{uri: `http://openweathermap.org/img/w/${icon}.png`}}
        />
        <Text style={styles.degree}>{degree}°</Text>
      </View>
        <Text style={styles.humidity}>Humidity: %{humidity}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
export default WeatherCard;
