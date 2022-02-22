import {StyleSheet, Platform} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  getResponsiveFontSize,
} from '../../utils/scalingUtils';
import * as Colors from '../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.TRANSPARENT_BLACK,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: Colors.WHITE,
    borderRadius: 12,
    paddingHorizontal: responsiveHeight(2.5),
    paddingVertical: responsiveHeight(3),
    width: responsiveWidth(92),
    zIndex: 1,
    borderWidth: 0.5,
    borderColor: Colors.BLACK,
  },
  btnNext: {
    height:
      Platform.OS === 'ios' ? responsiveHeight(5.5) : responsiveHeight(6.5),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1),
  },
  saveButton: {
    width: responsiveWidth(40),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  contentContainer: {
    marginTop: responsiveHeight(4),
  },
  scrollContainer: {
    marginTop: responsiveHeight(15),
    paddingBottom: responsiveHeight(28),
  },
});
