import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

const {width, height} = Dimensions.get('window');

const baseStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondaryColor
  },
});

export default {
  small: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      width: 45,
      height: 45,
      borderRadius: 23,
    },
  }),
  normal: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      width: 60,
      height: 60,
      borderRadius: 30,
    },
  }),
  big: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      width: 90,
      height: 90,
      borderRadius: 45,
    },
  }),
};
