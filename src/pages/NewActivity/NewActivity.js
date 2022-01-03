import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {useClock} from 'react-native-timer-hooks';
import Layout from './Layout';
import HaversineAlgorithm from '../../utils/HaversineAlgorithm';

const distanceCalculate = array => {
  let distance = 0;
  for (let i = 1; i < array.length; i++) {
    distance += HaversineAlgorithm(
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
  const [minuteDistance, setMinuteDistance] = useState(0);
  const [routes, setRoutes] = useState([]);
  const [speed, setSpeed] = useState(0);
  const [chartDistance, setChartDistance] = useState([]);
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.001,
    longitudeDelta: 0.0005,
  });

  const [counter, startTimer, pauseTimer, resetTimer, isRunningTimer] =
    useClock(0, 100, false);

  useEffect(() => {
    setDistance(distanceCalculate(routes));
  }, [routes]);
  useEffect(() => {
    setMinuteDistance(minuteDistance + distanceCalculate(chartDistance));
  }, [chartDistance]);

  useEffect(() => {
    if (counter % 5 == 0) {
      Geolocation.getCurrentPosition(
        location => {
          setPosition({
            ...position,
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
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
    if (counter % 60 == 0) {
      const temporaryData = routes;
      const deletedIndex = (counter - 60) / 5;
      if (counter != 60) {
        temporaryData.splice(0, deletedIndex);
      }
      setChartDistance([...chartDistance, distanceCalculate(temporaryData) * 1000]);
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
      chartData={chartDistance}
    />
  );
};
export default NewActivity;
