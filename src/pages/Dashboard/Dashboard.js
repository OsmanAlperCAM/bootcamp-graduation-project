import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Layout from './Layout';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import routes from '../../Navigation/routes';

const Dashboard = props => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.001,
    longitudeDelta: 0.0005,
  });
  useEffect(() => {
    console.log('userdata', userData);
  }, [userData]);
  useEffect(() => {
    database()
      .ref(`${auth().currentUser.uid}`)
      .on('value', snapshot => {
        setUserData(snapshot.val());
      });
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
  const handleGoAdd = () => {
    navigation.navigate(routes.NEW_ACTIVITY_PAGE, {position: position});
    console.log('add Press');
  };
  if (userData == null) {
    return null;
  }
  return (
    <Layout
      onLogOut={handleLogOut}
      position={position}
      userData={userData}
      onAddPress={handleGoAdd}
    />
  );
};
export default Dashboard;
