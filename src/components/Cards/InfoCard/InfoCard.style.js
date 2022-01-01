import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import fontSize from '../../../styles/fontSize';
import spacing from '../../../styles/spacing';

export default StyleSheet.create({
  container: {
    padding: spacing.tiny,
    margin: spacing.tiny,
    alignItems:'center',
  },
  title: {
    fontSize: fontSize.normal,
    color: colors.primaryTextColor,
},
text: {
    fontSize: fontSize.large,
    fontWeight: 'bold',
    color: colors.primaryTextColor,
  },
});
