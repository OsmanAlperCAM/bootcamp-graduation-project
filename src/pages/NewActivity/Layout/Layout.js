import React from 'react';
import {View, Text, ToastAndroid, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import {BarChart} from 'react-native-chart-kit';
import {showMessage, hideMessage} from 'react-native-flash-message';
import CircleButton from '../../../components/CircleButton';
import StatusCard from '../../../components/Cards/StatusCard';
import styles from './Layout.style';
import ConvertTimer from '../../../utils/ConvertTimer';
import colors from '../../../styles/colors';

const deviceSize = Dimensions.get('window');

const Layout = ({
  position,
  onPlayPausePress,
  onStopLongPress,
  counter,
  isRunningTimer,
  routes,
  speed,
  distance,
  chartData,
  weatherData,
  isFinish,
}) => {
  const data = {
    datasets: [
      {
        data: [...chartData],
      },
    ],
  };
  const handleStopPress = () => {
    showMessage({
      message: 'Long press the stop button to finish the run',
      type: 'warning',
    });
  };
  return (
    <View style={styles.container}>
      <StatusCard
        weather={{
          degree: weatherData?.main.temp,
          icon: weatherData?.weather['0'].icon,
          title: weatherData?.weather['0'].description,
          humidity: weatherData?.main.humidity,
        }}
        variant="secondary"
        titleDistance="Distance"
        titleTime="Time"
        titleNumber="Speed"
        distance={`${distance.toFixed(2)} km`}
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
        {!isFinish ? (
          <View style={styles.button_container}>
            <CircleButton
              iconName="stop"
              size="big"
              onPress={handleStopPress}
              onLongPress={onStopLongPress}
            />
            <CircleButton
              iconName={isRunningTimer ? 'pause' : 'play-arrow'}
              size="big"
              onPress={onPlayPausePress}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};
export default Layout;
