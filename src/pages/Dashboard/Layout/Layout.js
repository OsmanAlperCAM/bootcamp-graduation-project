import React from 'react';
import {View, Text, Button} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './Layout.style';
import FloatingActionButton from '../../../components/CircleButton';
import StatusCard from '../../../components/Cards/StatusCards';

const Layout = ({onLogOut, position, userData}) => {
  return (
    <View style={styles.container}>
      <StatusCard
        title={`${userData.profile.name} ${userData.profile.surname}`}
        distance={`${userData.activity.total.distance} KM`}
        time={`${userData.activity.total.time} HR`}
        number={userData.activity.total.number}
        variant="secondary"
      />
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={position}
        showsUserLocation={true}></MapView>
      <View style={styles.buttons_container}>
      <FloatingActionButton iconName='leaderboard' />
      <FloatingActionButton iconName='add' size='big'/>
      <FloatingActionButton iconName='history'/>
      </View>
        {/* <Button title="Log Out" onPress={onLogOut} /> */}
    </View>
  );
};
export default Layout;
