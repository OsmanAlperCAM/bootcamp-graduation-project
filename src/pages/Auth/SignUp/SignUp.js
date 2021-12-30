import React from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import styles from './SignUp.style';

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  surname: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .trim()
    .min(6, 'The password should be 6 characters at least')
    .required('Required'),
  confirmPassword: Yup.string().equals(
    [Yup.ref('password'), null],
    'Password Does Not Match',
  ),
});

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
        confirmPassword: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={handleFormSubmit}>
      {({handleChange, handleBlur, handleSubmit, errors, touched, values}) => (
        <View style={styles.container}>
          <View style={styles.row_container}>
            <View style={styles.input_container}>
              <Input
                placeholder="Name"
                label="Name"
                error={touched.name && errors.name}
                onBlur={handleBlur('name')}
                onChangeText={handleChange('name')}
                value={values.name}
              />
            </View>
            <View style={styles.input_container}>
              <Input
                placeholder="Surname"
                label="Surname"
                error={touched.surname && errors.surname}
                onBlur={handleBlur('surname')}
                onChangeText={handleChange('surname')}
                value={values.surname}
              />
            </View>
          </View>
          <Input
            placeholder="E-mail"
            iconName="email"
            label="Email"
            error={touched.email && errors.email}
            onBlur={handleBlur('email')}
            onChangeText={handleChange('email')}
            value={values.email}
          />
          <Input
            placeholder="Password"
            iconName="lock"
            label="Password"
            error={touched.password && errors.password}
            onBlur={handleBlur('password')}
            onChangeText={handleChange('password')}
            value={values.password}
            secureTextEntry
          />
          <Input
            placeholder="Confirm Password"
            iconName="lock"
            label="Confirm Password"
            error={touched.confirmPassword && errors.confirmPassword}
            onBlur={handleBlur('confirmPassword')}
            onChangeText={handleChange('confirmPassword')}
            value={values.confirmPassword}
            secureTextEntry
          />
          <Button title="Sign Up" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};
export default SignUp;
