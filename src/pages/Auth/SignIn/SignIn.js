import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './SignIn.style';

const SignIn = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>SignIn</Text>
      <Button title="Go SignUp" onPress={()=> navigation.navigate('SignUp')} />
    </View>
  );
};
export default SignIn;
