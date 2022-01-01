import {StyleSheet,Dimensions} from 'react-native';
import spacing from '../../../styles/spacing';

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  buttons_container:{
    width:width,
    bottom:spacing.tiny,
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});
