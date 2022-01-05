import React from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import {showMessage, hideMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import styles from './SignIn.style';
import Input from '../../../components/Input';
import Button from '../../../components/Button/';
import routes from '../../../Navigation/routes';
import {useDispatch} from 'react-redux';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().trim().required('Required'),
});

const SignIn = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = async (email, password) => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password);
      dispatch({type: 'USER_SESSION', payload: {session: response}});
      showMessage({
        message: `Sign In Success`,
        type: 'success',
      });
      console.log('signIn', response);
    } catch (error) {
      console.log(`${error.message.split(']')[1].trim()}`);
      showMessage({
        message: `${error.message.split(']')[1].trim()}`,
        type: 'warning',
      });
    }
  };
  const handleGoSignUp = () => {
    navigation.navigate(routes.SIGN_UP_PAGE);
  };
  const handleFormSubmit = values => {
    handleLogin(values.email, values.password);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignInSchema}
      onSubmit={handleFormSubmit}>
      {({handleChange, handleSubmit, handleBlur, errors, touched, values}) => (
        <View style={styles.container}>
          <Input
            placeholder="E-Mail"
            iconName="email"
            label="E-Mail"
            keyboardType="email-address"
            error={touched.email && errors.email}
            onBlur={handleBlur('email')}
            value={values.email}
            onChangeText={handleChange('email')}
          />
          <Input
            placeholder="Password"
            iconName="lock"
            label="Password"
            error={touched.password && errors.password}
            onBlur={handleBlur('password')}
            value={values.password}
            onChangeText={handleChange('password')}
            secureTextEntry
          />
          <Button title="Sign In" onPress={handleSubmit} />
          <Button title="Sign Up" variant="outline" onPress={handleGoSignUp} />
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
