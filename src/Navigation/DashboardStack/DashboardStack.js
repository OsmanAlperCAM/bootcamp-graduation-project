import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../../pages/Dashboard';
import routes from '../routes';
import NewActivity from '../../pages/NewActivity';
import History from '../../pages/History';
import ActivityDetail from '../../pages/ActivityDetail';
import Leaderboard from '../../pages/Leaderboard';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.DASHBOARD_PAGE} component={Dashboard} />
      <Stack.Screen name={routes.NEW_ACTIVITY_PAGE} component={NewActivity} />
      <Stack.Screen name={routes.HISTORY_PAGE} component={History} />
      <Stack.Screen name={routes.ACTIVITY_DETAIL_PAGE} component={ActivityDetail} />
      <Stack.Screen name={routes.LEADERBOARD_PAGE} component={Leaderboard} />
    </Stack.Navigator>
  );
};

export default AuthStack;
