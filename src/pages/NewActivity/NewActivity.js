import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {useClock} from 'react-native-timer-hooks';
import Layout from './Layout';
import HaversineAlgorithm from '../../utils/HaversineAlgorithm';

const distanceCalculate = array => {
  let distance = 0;
  for (let i = 1; i < array.length; i++) {
    console.log('i', i);
    distance = HaversineAlgorithm(
      array[i - 1].latitude,
      array[i - 1].longitude,
      array[i].latitude,
      array[i].longitude,
    );
  }
  return distance;
};

const NewActivity = props => {
  const [distance, setDistance] = useState(0);
  const [routes, setRoutes] = useState([]);
  const [speed, setSpeed] = useState(0);
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.001,
    longitudeDelta: 0.0005,
  });

  const [counter, startTimer, pauseTimer, resetTimer, isRunningTimer] =
    useClock(0, 1000, false);

  useEffect(() => {
    console.log('distance', distance);
  }, [distance]);
  useEffect(() => {
    console.log('5 dis', distanceCalculate(routes));
   setDistance(distance +distanceCalculate(routes))
  }, [routes]);

  useEffect(() => {
    if (counter % 5 == 0 && counter !=0) {
      Geolocation.getCurrentPosition(
        location => {
          setSpeed(location.coords.speed);
          setRoutes([
            ...routes,
            {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            },
          ]);
        },
        error => console.log(error),
        {enableHighAccuracy: true},
      );
    }
  }, [counter]);

  const handlePlayPausePress = () => {
    if (isRunningTimer) {
      pauseTimer();
      return;
    }
    startTimer();
  };
  const handleStopPress = () => {
    pauseTimer();
    resetTimer(0);
  };
  useEffect(() => {}, [counter]);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => {
        setPosition({
          ...position,
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
      },
      error => console.log(error),
      {enableHighAccuracy: true},
    );
  }, []);
  return (
    <Layout
      position={position}
      onPlayPausePress={handlePlayPausePress}
      onStopPress={handleStopPress}
      isRunningTimer={isRunningTimer}
      counter={counter}
      routes={routes}
      speed={speed}
      distance={distance}
    />
  );
};
export default NewActivity;
