import React from 'react';
import {View, FlatList} from 'react-native';
import LeaderboardCard from '../../../components/Cards/LeaderboardCard';
import styles from './Layout.style';

const Layout = ({leaderList}) => {
  const renderList = ({item, index}) => {
    return (
      <LeaderboardCard
        name={item.name}
        distance={item.distance}
        index={index}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={leaderList} renderItem={renderList} />
    </View>
  );
};
export default Layout;
