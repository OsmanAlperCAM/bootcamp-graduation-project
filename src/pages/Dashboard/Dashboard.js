import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {showMessage, hideMessage} from 'react-native-flash-message';
import Layout from './Layout';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import routes from '../../Navigation/routes';

const Dashboard = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
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
        dispatch({type: 'USER_DATA', payload: {userData: snapshot.val()}});
        database()
          .ref(`leaderboard/${auth().currentUser.uid}`)
          .set({
            name: `${snapshot.val().profile.name} ${
              snapshot.val().profile.surname
            }`,
            distance: `${snapshot.val().activity.total.distance}`,
          })
          .then(() => console.log('Data set.'));
      });
    Geolocation.getCurrentPosition(
      info => {
        setPosition({
          ...position,
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
      },
      error => {
        showMessage({
          message: `A Problem Occurred Retrieving Location`,
          type: 'danger',
        });
      },
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
  const handleGoHistory = () => {
    navigation.navigate(routes.HISTORY_PAGE);
    console.log('history Press');
  };
  const handleGoLeaderboard = () => {
    navigation.navigate(routes.LEADERBOARD_PAGE);
    console.log('Leaderboard Press');
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
      onHistoryPress={handleGoHistory}
      onLeaderboardPress={handleGoLeaderboard}
    />
  );
};
export default Dashboard;
