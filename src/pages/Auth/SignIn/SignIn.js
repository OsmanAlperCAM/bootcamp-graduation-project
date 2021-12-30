import React from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import styles from './SignIn.style';
import Input from '../../../components/Input';
import Button from '../../../components/Button/';

const SignIn = props => {
  const navigation = useNavigation();

  const handleGoSignUp = () => {
    navigation.navigate('SignUp');
  };
  const handleFormSubmit = values => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleFormSubmit}>
      {({handleChange, handleSubmit, values}) => (
        <View style={styles.container}>
          <Input
            placeholder="E-Mail"
            iconName="email"
            value={values.email}
            onChangeText={handleChange('email')}
          />
          <Input
            placeholder="Password"
            iconName="lock"
            value={values.password}
            onChangeText={handleChange('password')}
          />
          <Button title="Sign In" onPress={handleSubmit} />
          <Button title="Sign Up" variant="outline" onPress={handleGoSignUp} />
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
