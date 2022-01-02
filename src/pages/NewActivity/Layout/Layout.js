import React from 'react';
import {View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import CircleButton from '../../../components/CircleButton';
import StatusCard from '../../../components/Cards/StatusCard';
import styles from './Layout.style';

const Layout = ({
  position,
  onPlayPausePress,
  onStopPress,
  counter,
  isRunningTimer,
}) => {
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
          time={counter}
          number="0"
        />
        <View style={styles.button_container}>
          <CircleButton
            iconName="stop"
            variant="secondary"
            onPress={onStopPress}
          />
          <CircleButton
            iconName={isRunningTimer ? 'pause' : 'play-arrow'}
            variant="secondary"
            onPress={onPlayPausePress}
          />
        </View>
      </View>
      <Text>Layout</Text>
    </View>
  );
};
export default Layout;
