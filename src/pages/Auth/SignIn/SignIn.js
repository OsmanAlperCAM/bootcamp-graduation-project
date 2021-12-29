import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './SignIn.style';
import Input from '../../../components/Input';
import Button from '../../../components/Button/';

const SignIn = props => {
  const navigation = useNavigation();
  return ( 
    <View style={styles.container}>
      <Text>SignIn</Text>
      <Input placeholder="E-Mail" iconName='email'/>
      <Input placeholder="Password" iconName='lock'/>
      <Button title='Sign In'/>
      <Button title='Sign Up' variant='outline'/>
    </View>
  );
};
export default SignIn;
