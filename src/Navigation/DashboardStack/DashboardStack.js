import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../../pages/Dashboard';
import routes from '../routes';
import NewActivity from '../../pages/NewActivity';
import History from '../../pages/History';

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
    </Stack.Navigator>
  );
};

export default AuthStack;
