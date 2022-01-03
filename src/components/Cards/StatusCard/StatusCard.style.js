import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import fontSize from '../../../styles/fontSize';
import spacing from '../../../styles/spacing';
import radius from '../../../styles/radius';

const baseStyles = StyleSheet.create({
  container: {
    padding: spacing.tiny,
    margin: spacing.tiny,
    backgroundColor: colors.secondaryColorLight,
    borderRadius: radius.soft,
    justifyContent:'center'
  },
  status_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: fontSize.huge,
    color: colors.primaryTextColor,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default {
  default: StyleSheet.create({
      ...baseStyles,
      title:{
          ...baseStyles.title,
          color:colors.primaryTextColor,
      }
  }),
  secondary: StyleSheet.create({
      ...baseStyles,
      title:{
          ...baseStyles.title,
          color:colors.secondaryTextColor,
      }
  }),
};
