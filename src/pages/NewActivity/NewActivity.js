import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import Layout from './Layout';

const NewActivity = props => {
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
  return <Layout position={position} />;
};
export default NewActivity;
