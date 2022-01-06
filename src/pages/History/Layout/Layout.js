import React from 'react';
import {View, FlatList} from 'react-native';
import HistoryCard from '../../../components/Cards/HistoryCard';
import ConvertTimer from '../../../utils/ConvertTimer';
import styles from './Layout.style';

const Layout = ({history,onActivityPress}) => {
  const renderActivity = ({item}) => {
    return (
      <HistoryCard
        onPress={()=>onActivityPress(item)}
        date={`${item.date.split('T')[0]} ${item.date.split('T')[1].split('.')[0]}`}
        time={`Time: ${ConvertTimer(item.time)} Hr`}
        distance={`Distance: ${item.distance.toFixed(2)} Km`}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={history} renderItem={renderActivity} />
    </View>
  );
};
export default Layout;
