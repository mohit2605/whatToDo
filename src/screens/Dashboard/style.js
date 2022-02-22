import {Platform, StyleSheet} from 'react-native';
import * as Colors from '../../themes/colors';
import {responsiveHeight} from '../../utils/scalingUtils';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.APP_DARK_BACKGROUND_500,
    flex: 1,
  },
  listScroll: {
    paddingTop: responsiveHeight(2),
    paddingBottom:
      Platform.OS === 'android' ? responsiveHeight(18) : responsiveHeight(20),
  },
});
