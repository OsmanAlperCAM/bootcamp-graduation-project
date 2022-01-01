import React from 'react';
import {View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import CircleButton from '../../../components/CircleButton';
import StatusCard from '../../../components/Cards/StatusCard';
import styles from './Layout.style';

const Layout = ({position}) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={position}
        showsUserLocation={true}
      />
      <View style={styles.bottom_container}>
        <StatusCard
          variant="secondary"
          titleDistance="Distance"
          titleTime="Time"
          titleNumber="Speed"
          distance="0"
          time="0"
          number="0"
        />
        <View style={styles.button_container}>
          <CircleButton iconName="pause" variant="secondary" />
          <CircleButton iconName="play-arrow" variant="secondary" />
        </View>
      </View>
      <Text>Layout</Text>
    </View>
  );
};
export default Layout;
