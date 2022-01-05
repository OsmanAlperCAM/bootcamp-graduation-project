import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../../pages/Dashboard';
import routes from '../routes';
import NewActivity from '../../pages/NewActivity';
import History from '../../pages/History';
import ActivityDetail from '../../pages/ActivityDetail';
import Leaderboard from '../../pages/Leaderboard';
import colors from '../../styles/colors';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.secondaryColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        options={{headerTitle: 'Dashboard'}}
        name={routes.DASHBOARD_PAGE}
        component={Dashboard}
      />
      <Stack.Screen
        options={{headerTitle: 'New Activity'}}
        name={routes.NEW_ACTIVITY_PAGE}
        component={NewActivity}
      />
      <Stack.Screen
        options={{headerTitle: 'History'}}
        name={routes.HISTORY_PAGE}
        component={History}
      />
      <Stack.Screen
        name={routes.ACTIVITY_DETAIL_PAGE}
        component={ActivityDetail}
      />
      <Stack.Screen
        options={{headerTitle: 'Leaderboard'}}
        name={routes.LEADERBOARD_PAGE}
        component={Leaderboard}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
