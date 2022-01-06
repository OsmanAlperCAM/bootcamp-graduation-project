import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import fontSize from '../../../styles/fontSize';
import radius from '../../../styles/radius';
import spacing from '../../../styles/spacing';

export default StyleSheet.create({
  container: {
    margin: spacing.tiny,
    padding: spacing.tiny,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondaryColorLight,
    borderRadius: radius.soft,
  },
  name: {
    flex: 1,
    fontSize: fontSize.large,
    margin: spacing.tiny,
    color: colors.secondaryTextColor,
    fontWeight: 'bold',
  },
  distance: {
    margin: spacing.tiny,
    fontSize: fontSize.large,
    fontWeight: 'bold',
    color: colors.secondaryTextColor,
  },
  number: {
    margin: spacing.tiny,
    fontSize: fontSize.large,
    fontWeight: 'bold',
    color: colors.secondaryTextColor,
  },
});
