import React from 'react';
import {View, Text, Button} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './Layout.style';

const Layout = ({onLogOut, position}) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={position}
        showsUserLocation={true}></MapView>
      <Text>Layout</Text>
      <Button title="Log Out" onPress={onLogOut} />
    </View>
  );
};
export default Layout;
