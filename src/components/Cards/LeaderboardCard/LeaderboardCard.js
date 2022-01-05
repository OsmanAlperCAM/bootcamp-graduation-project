import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../styles/colors';
import iconSize from '../../../styles/iconSize';
import styles from './LeaderboardCard.style';

const LeaderboardCard = ({name, distance, index}) => {
  let iconColor = '';

  switch (index) {
    case 0:
      iconColor = colors.trophy.first;
      break;
    case 1:
      iconColor = colors.trophy.second;
      break;
    case 2:
      iconColor = colors.trophy.third;
      break;

    default:
      iconColor = '';
      break;
  }

  return (
    <View style={styles.container}>
      {!!iconColor && <Icon name="trophy-variant" size={iconSize.large} color={iconColor} />}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.distance}>{Number(distance).toFixed(2)} Km</Text>
    </View>
  );
};
export default LeaderboardCard;
