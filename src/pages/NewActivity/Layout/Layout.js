import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import {BarChart} from 'react-native-chart-kit';
import CircleButton from '../../../components/CircleButton';
import StatusCard from '../../../components/Cards/StatusCard';
import styles from './Layout.style';
import ConvertTimer from '../../../utils/ConvertTimer';
import colors from '../../../styles/colors';
import WeatherCard from '../../../components/Cards/WeatherCard';

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
  weatherData
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
      <StatusCard
        weather={isRunningTimer?{
          degree: weatherData?.main.temp,
          icon: weatherData?.weather['0'].icon,
          title: weatherData?.weather['0'].description,
          humidity: weatherData?.main.humidity,
        }:null}
        variant="secondary"
        titleDistance="Distance"
        titleTime="Time"
        titleNumber="Speed"
        distance={`${Math.round(distance * 1000)} m`}
        time={ConvertTimer(counter)}
        number={`${Math.floor(speed)} m/s`}
      />
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
        <BarChart
          style={styles.chart}
          data={data}
          width={deviceSize.width}
          height={deviceSize.height / 4}
          chartConfig={{
            barPercentage: 0.3,
            backgroundGradientFrom: colors.secondaryColorLight,
            backgroundGradientTo: colors.secondaryColorLight,
            decimalPlaces: 0,
            color: () => colors.secondaryTextColor,
            labelColor: () => colors.secondaryTextColor,
            fillShadowGradientOpacity: 1,
          }}
          verticalLabelRotation={0}
          showValuesOnTopOfBars={true}
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
    </View>
  );
};
export default Layout;
