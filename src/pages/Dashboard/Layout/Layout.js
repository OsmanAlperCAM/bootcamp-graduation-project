import React from 'react';
import {View, Text, Button} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './Layout.style';
import StatusCard from '../../../components/Cards/StatusCards';

const Layout = ({onLogOut, position}) => {
  return (
    <View style={styles.container}>
      <StatusCard distance="0 Km" time="0 HR" number="0" variant="secondary" />
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={position}
        showsUserLocation={true}></MapView>
      <Button title="Log Out" onPress={onLogOut} />
    </View>
  );
};
export default Layout;
