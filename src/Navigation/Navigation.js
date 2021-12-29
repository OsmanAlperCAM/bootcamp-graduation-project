import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Appearance} from 'react-native';
import {useDispatch} from 'react-redux';
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const dispatch = useDispatch();

  const theme = Appearance.getColorScheme();
  Appearance.addChangeListener(scheme => {
    dispatch({type: 'CHANGE_APP_THEME', payload: {theme: scheme.colorScheme}});
  });
  dispatch({type: 'CHANGE_APP_THEME', payload: {theme: theme}});

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
