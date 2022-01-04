import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import fontSize from '../../../styles/fontSize';
import radius from '../../../styles/radius';
import spacing from '../../../styles/spacing';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: spacing.normal,
    margin: spacing.tiny,
    borderWidth: 1,
    borderRadius: radius.soft,
    backgroundColor: colors.secondaryColorLight,
    
  },
  text_container: {
    flex: 1,
  },
  inner_container: {
    flexDirection: 'row',
  },
  date: {
    color: colors.secondaryTextColor,
    fontSize: fontSize.large,
    fontWeight: 'bold',
  },
  time: {
    color: colors.secondaryTextColor,
    fontSize: fontSize.normal,
    fontStyle: 'italic',
  },
  distance: {
    color: colors.secondaryTextColor,
    marginLeft: spacing.tiny,
    fontStyle: 'italic',
    fontSize: fontSize.normal,
  },
});
