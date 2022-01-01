import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import fontSize from '../../../styles/fontSize';
import spacing from '../../../styles/spacing';

const baseStyles = StyleSheet.create({
  container: {
    padding: spacing.tiny,
    margin: spacing.tiny,
    alignItems: 'center',
  },
  title: {
    fontSize: fontSize.normal,
  },
  text: {
    fontSize: fontSize.large,
    fontWeight: 'bold',
    color: colors.primaryTextColor,
  },
});

export default {
  default: StyleSheet.create({
    ...baseStyles,
    title: {
      ...baseStyles.title,
      color: colors.primaryTextColor,
    },
    text: {
      ...baseStyles.text,
      color: colors.primaryTextColor,
    },
  }),
  secondary: StyleSheet.create({
    ...baseStyles,
    title: {
      ...baseStyles.title,
      color: colors.secondaryTextColor,
    },
    text: {
      ...baseStyles.text,
      color: colors.secondaryTextColor,
    },
  }),
};
