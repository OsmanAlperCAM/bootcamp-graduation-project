import React from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import Layout from './Layout';

const Dashboard = props => {
  const handleLogOut = async () => {
    await auth().signOut();
  };
  return <Layout onLogOut={handleLogOut} />;
};
export default Dashboard;
