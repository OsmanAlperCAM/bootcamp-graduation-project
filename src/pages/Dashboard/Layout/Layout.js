import React from 'react';
import {View, Text,Button} from 'react-native';
import styles from './Layout.style';

const Layout = ({onLogOut}) => {
  return (
    <View style={styles.container}>
      <Text>Layout</Text>
      <Button title='Log Out' onPress={onLogOut}/>
    </View>
  );
};
export default Layout;

