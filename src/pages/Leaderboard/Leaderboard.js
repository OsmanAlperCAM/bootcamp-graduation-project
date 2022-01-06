import React, {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import ParseFirebaseData from '../../utils/ParseFirebaseData';
import Layout from './Layout/';
import Loading from '../../components/Loading';

const Leaderboard = props => {
  const [leaderList, setLeaderList] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    database()
      .ref('/leaderboard')
      .once('value')
      .then(snapshot => {
        setLeaderList(ParseFirebaseData(snapshot.val()).sort((a,b)=> (b.distance - a.distance)).slice(0,50));
        setLoading(false)
      });
  }, []);

  if(loading){
    return <Loading/>
  }
  return <Layout leaderList={leaderList}  />;
};
export default Leaderboard;
