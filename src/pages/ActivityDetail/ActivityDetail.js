import React from 'react';
import { useRoute } from '@react-navigation/native';
import {View, Text} from 'react-native';
import Layout from './Layout';

const ActivityDetail = props => {
    const route = useRoute();
    const {activity} = route.params;
  return <Layout activity={activity}/>;
};
export default ActivityDetail;
