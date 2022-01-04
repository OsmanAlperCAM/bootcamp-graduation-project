import React from 'react';
import {View, Text} from 'react-native';
import { useSelector } from 'react-redux';
import ParseFirebaseData from '../../utils/ParseFirebaseData';
import Layout from './Layout';

const History = props => {
  const userData = useSelector(state => state.userData)
  const history = ParseFirebaseData(userData.activity.history)
  return (
    <Layout history={history}/>
  );
};
export default History;
