import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import Layout from './Layout';
import Geolocation from '@react-native-community/geolocation';

const Dashboard = props => {
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.001,
    longitudeDelta: 0.0005,
  });
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
  const handleLogOut = async () => {
    await auth().signOut();
  };
  return <Layout onLogOut={handleLogOut} position={position} />;
};
export default Dashboard;
