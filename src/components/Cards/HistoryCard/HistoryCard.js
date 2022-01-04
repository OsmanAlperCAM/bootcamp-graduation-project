import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import styles from './HistoryCard.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import iconSize from '../../../styles/iconSize';
import colors from '../../../styles/colors';

const HistoryCard = ({date,time,distance,onPress}) => {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.text_container}>
        <Text style={styles.date}>{date}</Text>
        <View  style={styles.inner_container}>
          <Text style={styles.time}>{time}</Text>
          <Text style={styles.distance}>{distance}</Text>
        </View>
      </View>
      <Icon name="arrow-forward-ios" size={iconSize.normal} color={colors.secondaryTextColor} />
    </TouchableOpacity>
  );
};
export default HistoryCard;
