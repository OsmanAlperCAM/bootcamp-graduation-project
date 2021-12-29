import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './SignIn.style';
import Input from '../../../components/Input';
import {useSelector} from 'react-redux';

const SignIn = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>SignIn</Text>
      <Input placeholder="E-Mail" iconName='email'/>
      <Input placeholder="Password" iconName='lock'/>
      <Button title="Go SignUp" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
};
export default SignIn;
