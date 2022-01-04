import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import routes from '../../Navigation/routes';
import ParseFirebaseData from '../../utils/ParseFirebaseData';
import Layout from './Layout';

const History = props => {
  const navigation = useNavigation();
  const userData = useSelector(state => state.userData);
  const history = ParseFirebaseData(userData.activity.history).sort((a, b) => {
    return a.date < b.date;
  });

  const handleGoActivityDetail = item => {
    navigation.navigate(routes.ACTIVITY_DETAIL_PAGE, {activity: item});
  };

  return <Layout history={history} onActivityPress={handleGoActivityDetail} />;
};
export default History;
