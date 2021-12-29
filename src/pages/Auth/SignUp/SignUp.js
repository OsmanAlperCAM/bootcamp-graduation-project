import React from 'react';
import {View} from 'react-native';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import styles from './SignUp.style';

const SignUp = props => {
  return (
    <View style={styles.container}>
      <View style={styles.row_container}>
        <View style={styles.input_container}>
          <Input placeholder="Name" />
        </View>
        <View style={styles.input_container}>
          <Input placeholder="Surname" />
        </View>
      </View>
      <Input placeholder="E-mail" iconName='email' />
      <Input placeholder="Password" iconName='lock'/>
      <Input placeholder="Repassword" iconName='lock'/>
      <Button title='Sign Up'/>
    </View>
  );
};
export default SignUp;
