import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import {BarChart} from 'react-native-chart-kit';
import CircleButton from '../../../components/CircleButton';
import StatusCard from '../../../components/Cards/StatusCard';
import styles from './Layout.style';
import ConvertTimer from '../../../utils/ConvertTimer';
import colors from '../../../styles/colors';

const deviceSize = Dimensions.get('window');

const Layout = ({
  position,
  onPlayPausePress,
  onStopPress,
  counter,
  isRunningTimer,
  routes,
  speed,
  distance,
  chartData,
}) => {
  const data = {
    datasets: [
      {
        data: [...chartData],
      },
    ],
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={position}
        region={position}
        showsUserLocation={true}>
        <Polyline
          coordinates={routes}
          strokeColor={colors.secondaryColorLight}
          strokeWidth={6}
        />
      </MapView>
      <View style={styles.bottom_container}>
        <StatusCard
          variant="secondary"
          titleDistance="Distance"
          titleTime="Time"
          titleNumber="Speed"
          distance={`${Math.round(distance * 1000)} m`}
          time={ConvertTimer(counter)}
          number={`${Math.floor(speed)} m/s`}
        />
        <View style={styles.button_container}>
          <CircleButton
            iconName="stop"
            size="big"
            variant="secondary"
            onPress={onStopPress}
          />
          <CircleButton
            iconName={isRunningTimer ? 'pause' : 'play-arrow'}
            size="big"
            variant="secondary"
            onPress={onPlayPausePress}
          />
        </View>
      </View>
      <BarChart
        style={styles.chart}
        data={data}
        width={deviceSize.width}
        height={deviceSize.height / 4}
        chartConfig={{
          barPercentage: 0.3,
          backgroundGradientFrom: colors.secondaryColor,
          backgroundGradientTo: colors.secondaryColor,
          decimalPlaces: 0,
          color: () => colors.secondaryTextColor,
          labelColor: () => colors.secondaryTextColor,
          fillShadowGradientOpacity: 1,
        }}
        verticalLabelRotation={0}
      />
    </View>
  );
};
export default Layout;
