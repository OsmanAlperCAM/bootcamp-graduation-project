import React from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import styles from './SignUp.style';

const SignUp = props => {
  const handleFormSubmit = values => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        name: '',
        surname: '',
        email: '',
        password: '',
        repassword: '',
      }}
      onSubmit={handleFormSubmit}>
      {({handleChange, handleSubmit, values}) => (
        <View style={styles.container}>
          <View style={styles.row_container}>
            <View style={styles.input_container}>
              <Input
                placeholder="Name"
                onChangeText={handleChange('name')}
                value={values.name}
              />
            </View>
            <View style={styles.input_container}>
              <Input
                placeholder="Surname"
                onChangeText={handleChange('surname')}
                value={values.surname}
              />
            </View>
          </View>
          <Input
            placeholder="E-mail"
            iconName="email"
            onChangeText={handleChange('email')}
            value={values.email}
          />
          <Input
            placeholder="Password"
            iconName="lock"
            onChangeText={handleChange('password')}
            value={values.password}
          />
          <Input
            placeholder="Repassword"
            iconName="lock"
            onChangeText={handleChange('repassword')}
            value={values.repassword}
          />
          <Button title="Sign Up" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};
export default SignUp;
