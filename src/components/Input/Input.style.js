import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';
import colors from '../../styles/colors';
import radius from '../../styles/radius';
import fontSize from '../../styles/fontSize';

export default StyleSheet.create({
  container: {
    margin: spacing.tiny,
    marginHorizontal: spacing.normal,
  },
  label_container: {
    margin: spacing.tiny,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label:{
    fontSize:fontSize.medium,
    color: colors.primaryTextColor
  },
  error_label:{
    fontSize:fontSize.medium,
    color: colors.errorText,
    fontWeight: 'bold'
  },
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.tiny,
    borderWidth: 1,
    borderRadius: radius.soft,
    backgroundColor: colors.primaryColor,
    borderColor: colors.primaryColorDark,
  },
  input: {
    flex: 1,
    color: colors.primaryTextColor,
  },
});
