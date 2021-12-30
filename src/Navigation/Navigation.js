import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import routes from './routes';
import AuthStack from './AuthStack/';
import DashboardStack from './DashboardStack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [hasSession, setHasSession] = useState(null);

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(setHasSession);
    return subscribe;
  }, []);
  useEffect(() => {
    console.log('hasSession',hasSession);
  }, [hasSession]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!!hasSession ? (
          <Stack.Screen
            name={routes.DASHBOARD_STACK}
            component={DashboardStack}
          />
        ) : (
          <Stack.Screen name={routes.AUTH_STACK} component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
