import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import database from '@react-native-firebase/database';
import ParseFirebaseData from '../../utils/ParseFirebaseData';
import Layout from './Layout/';

const Leaderboard = props => {
  const [leaderList, setLeaderList] = useState([]);

  useEffect(() => {
    database()
      .ref('/leaderboard')
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
        setLeaderList(ParseFirebaseData(snapshot.val()).sort((a,b)=> (b.distance - a.distance)));
      });
  }, []);

  return <Layout leaderList={leaderList}  />;
};
export default Leaderboard;
