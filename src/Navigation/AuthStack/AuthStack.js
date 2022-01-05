import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../../pages/Auth/SignIn';
import SignUp from '../../pages/Auth/SignUp';
import routes from '../routes';

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
        options={{headerTitle: 'Sign In'}}
        name={routes.SIGN_IN_PAGE}
        component={SignIn}
      />
      <Stack.Screen
        options={{headerTitle: 'Sign Up'}}
        name={routes.SIGN_UP_PAGE}
        component={SignUp}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
