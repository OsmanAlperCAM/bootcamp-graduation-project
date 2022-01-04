import React from 'react';
import {View, Text, FlatList} from 'react-native';
import HistoryCard from '../../../components/Cards/HistoryCard';
import ConvertTimer from '../../../utils/ConvertTimer';
import styles from './Layout.style';

const renderActivity = ({item}) => {
  return (
    <HistoryCard
      date={item.date.split('T')[0]}
      time={`Time: ${ConvertTimer(item.time)} Hr`}
      distance={`Distance: ${item.distance.toFixed(2)} Km`}
    />
  );
};
const Layout = ({history}) => {
  return (
    <View style={styles.container}>
      <FlatList data={history} renderItem={renderActivity} />
    </View>
  );
};
export default Layout;
