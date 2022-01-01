import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  button_container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
  },
  bottom_container: {
      flex:1,
      backgroundColor:colors.primaryColor
  }
});
