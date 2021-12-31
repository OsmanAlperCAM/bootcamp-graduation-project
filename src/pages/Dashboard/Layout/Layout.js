import React from 'react';
import {View, Text, Button} from 'react-native';
import MapView from 'react-native-maps';
import styles from './Layout.style';

const Layout = ({onLogOut}) => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}></MapView>
      <Text>Layout</Text>
      <Button title="Log Out" onPress={onLogOut} />
    </View>
  );
};
export default Layout;
