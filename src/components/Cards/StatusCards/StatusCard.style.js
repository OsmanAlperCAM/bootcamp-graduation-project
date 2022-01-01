import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import fontSize from '../../../styles/fontSize';

export default StyleSheet.create({
  container: {
  },
  status_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  title:{
      fontSize:fontSize.huge,
      color: colors.primaryTextColor,
      fontWeight: 'bold',
      textAlign: 'center'
  }
});
