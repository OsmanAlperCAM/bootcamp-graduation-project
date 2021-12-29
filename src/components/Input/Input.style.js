import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';
import colors from '../../styles/colors';
import radius from '../../styles/radius';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.tiny,
    margin: spacing.tiny,
    marginHorizontal: spacing.normal,
    borderWidth: 1,
    borderRadius: radius.soft,
    backgroundColor: colors.primaryColor,
    borderColor: colors.primaryColorDark,
  },
  input_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: colors.primaryTextColor,
  },
});
