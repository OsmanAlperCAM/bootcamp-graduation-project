import React from 'react';
import {View, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import CircleButton from '../../../components/CircleButton';
import StatusCard from '../../../components/Cards/StatusCard';
import styles from './Layout.style';
import ConvertTimer from '../../../utils/ConvertTimer';
import colors from '../../../styles/colors';

const Layout = ({
  position,
  onPlayPausePress,
  onStopPress,
  counter,
  isRunningTimer,
  routes,
  speed,
}) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={position}
        showsUserLocation={true}
      >
        <Polyline
		coordinates={routes}
		strokeColor= {colors.secondaryColorLight} // fallback for when `strokeColors` is not supported by the map-provider
		
		strokeWidth={6}
	/>
      </MapView>
      <View style={styles.bottom_container}>
        <StatusCard
          variant="secondary"
          titleDistance="Distance"
          titleTime="Time"
          titleNumber="Speed"
          distance="0"
          time={ConvertTimer(counter)}
          number={`${Math.floor(speed)} m/s`}
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
