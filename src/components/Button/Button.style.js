import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';
import fontSize from '../../styles/fontSize';

const baseStyles = StyleSheet.create({
  container: {
    padding: spacing.normal,
    margin: spacing.tiny,
    marginHorizontal: spacing.large,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: radius.soft,
  },
  title: {
    fontWeight: 'bold',
    color: colors.secondaryTextColor,
    fontSize: fontSize.normal,
  },
});

export default {
  default: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      backgroundColor: colors.secondaryColor,
    },
    title: {
      ...baseStyles.title,
      color: colors.secondaryTextColor,
    },
  }),
  outline: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      backgroundColor: colors.primaryBackgroundColor,
      borderWidth:1,
      borderColor:colors.secondaryColor
    },
    title: {
      ...baseStyles.title,
      color: colors.secondaryColor,
    },
  }),
};
