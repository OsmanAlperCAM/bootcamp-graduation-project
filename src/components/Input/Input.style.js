import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';
import colors from '../../styles/colors';
import radius from '../../styles/radius';

const baseStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.tiny,
    margin: spacing.tiny,
    marginHorizontal: spacing.large,
    borderWidth: 1,
    borderRadius: radius.soft,
  },
  input: {
    flex: 1, 
  },
});
export default {
  light: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      backgroundColor: colors.light.primaryColor,
      borderColor: colors.light.primaryColorDark,
    },
    input:{
      ...baseStyles.input,
      color:colors.light.primaryTextColor
    },
  }),
  dark: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      backgroundColor: colors.dark.primaryColorLight,
      borderColor: colors.light.primaryColorLight,
    },
    input:{
      ...baseStyles.input,
      color:colors.dark.primaryTextColor
      
    },
  }),
};
