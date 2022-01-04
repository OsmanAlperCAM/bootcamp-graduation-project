import React from 'react';
import {View, Text,Dimensions} from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import MapView, {PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import StatusCard from '../../../components/Cards/StatusCard';
import colors from '../../../styles/colors';
import ConvertTimer from '../../../utils/ConvertTimer';
import styles from './Layout.style';

const deviceSize = Dimensions.get('window');
const Layout = ({activity}) => {
  const chartData = {
    datasets: [
      {
        data: [...activity.chartDistance],
      },
    ],
  };

  console.log(activity.routes[Math.round(activity.routes.length / 2)]);
  return (
    <View style={styles.container}>
      <StatusCard
        weather={{
          degree: activity.weatherData?.main.temp,
          icon: activity.weatherData?.weather['0'].icon,
          title: activity.weatherData?.weather['0'].description,
          humidity: activity.weatherData?.main.humidity,
        }}
        variant="secondary"
        titleDistance="Distance"
        titleTime="Time"
        titleNumber="Speed"
        distance={`${activity.distance.toFixed(2)} km`}
        time={ConvertTimer(activity.time)}
        number={`${Math.round(activity.speed)} m/s`}
      />
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          ...activity.routes[Math.round(activity.routes.length / 2)],
          latitudeDelta: 0.03,
          longitudeDelta: 0.001,
        }}>
        <Polyline
          coordinates={activity.routes}
          strokeColor={colors.secondaryColorLight}
          strokeWidth={6}
        />
      </MapView>
      <BarChart
          style={styles.chart}
          data={chartData}
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
    </View>
  );
};
export default Layout;
