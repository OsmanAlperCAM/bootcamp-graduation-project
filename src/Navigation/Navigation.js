import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes';
import AuthStack from './AuthStack/';
import DashboardStack from './DashboardStack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={routes.AUTH_STACK} component={AuthStack} />
        <Stack.Screen
          name={routes.DASHBOARD_STACK}
          component={DashboardStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
