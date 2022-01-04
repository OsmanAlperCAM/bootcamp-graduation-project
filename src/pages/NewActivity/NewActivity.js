import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {useClock} from 'react-native-timer-hooks';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Layout from './Layout';
import HaversineAlgorithm from '../../utils/HaversineAlgorithm';
import useFetchWeather from '../../hooks/useFetchWeather';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';

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
  const route = useRoute();
  const newReference = database()
    .ref(`${auth().currentUser.uid}/activity/history`)
    .push();
  const userData = useSelector(state => state.userData);
  console.log('userData', userData);

  const [distance, setDistance] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [routes, setRoutes] = useState([]);
  const [speed, setSpeed] = useState(0);
  const [chartDistance, setChartDistance] = useState([]);
  const [position, setPosition] = useState({...route.params.position});

  const {
    data: weatherData,
    loading,
    error,
    fetchData,
  } = useFetchWeather(position.latitude, position.longitude);

  useEffect(() => {
    console.log('weatherData', weatherData);
  }, [weatherData]);

  const [counter, startTimer, pauseTimer, resetTimer, isRunningTimer] =
    useClock(0, 1000, false);

  useEffect(() => {
    setDistance(distanceCalculate(routes));
  }, [routes]);

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
      let temporaryData = routes;
      const deletedIndex = (counter - 60) / 5;

      if (counter != 60) {
      }
      temporaryData = temporaryData.slice(deletedIndex);
      console.log(temporaryData);
      setChartDistance([
        ...chartDistance,
       distanceCalculate(temporaryData).toFixed(2),
      ]);
    }
  }, [counter]);

  const handlePlayPausePress = () => {
    fetchData();
    if (isRunningTimer) {
      pauseTimer();
      return;
    }
    startTimer();
  };
  const handleStopLongPress = () => {
    newReference.set({
      date: new Date().toISOString(),
      time: counter,
      distance: distance,
      routes: routes,
      speed: speed,
      chartDistance: chartDistance,
    });
    database()
  .ref(`${auth().currentUser.uid}/activity/total`)
  .update({
    distance:userData.activity.total.distance + distance,
    time:userData.activity.total.time + counter,
    number: userData.activity.total.number +1
  })
  .then(() => console.log('Data updated.'));
    setIsFinish(true);
    pauseTimer();
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
      onStopLongPress={handleStopLongPress}
      isRunningTimer={isRunningTimer}
      counter={counter}
      routes={routes}
      speed={speed}
      distance={distance}
      chartData={chartDistance}
      weatherData={weatherData}
      isFinish={isFinish}
    />
  );
};
export default NewActivity;
