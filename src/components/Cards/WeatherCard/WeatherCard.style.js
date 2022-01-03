import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import fontSize from '../../../styles/fontSize';

export default StyleSheet.create({
  container: {
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  degree:{
      fontWeight: 'bold',
      color:colors.secondaryTextColor,
      fontSize: fontSize.large
  },
  title:{
      fontWeight: 'bold',
      color:colors.secondaryTextColor,
      fontSize: fontSize.normal
  },
  humidity:{
      color:colors.secondaryTextColor,
      fontSize: fontSize.normal
  }
});
