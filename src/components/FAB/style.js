import {Platform, StyleSheet} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../../utils/scalingUtils';
import * as Colors from '../../themes/colors';

export const styles = StyleSheet.create({
  floatingContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? responsiveHeight(10) : responsiveHeight(8),
    right: Platform.OS === 'ios' ? responsiveWidth(8) : responsiveWidth(5),
    backgroundColor: Colors.WHITE,
    height: Platform.OS === 'ios' ? 76 : 70,
    width: Platform.OS === 'ios' ? 76 : 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    elevation: 5,
    zIndex: 2,
  },
  locationIcon: {
    zIndex: 1,
  },
});
