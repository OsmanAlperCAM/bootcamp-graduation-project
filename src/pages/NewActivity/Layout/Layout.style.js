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
    flex:1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
  },
  bottom_container: {
      flex:1,
      backgroundColor:colors.primaryColor
      
  },
  chart:{
    backgroundColor: colors.secondaryColor
  }
});
