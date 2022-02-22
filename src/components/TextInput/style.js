import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  getResponsiveFontSize,
} from '../../utils/scalingUtils';
import * as Colors from './../../themes/colors';

export const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: responsiveHeight(2.5),
  },
  inputWrapper: isLightMode => ({
    backgroundColor: isLightMode ? Colors.WHITE : Colors.GREYISH_BLACK_BACK,
    borderWidth: 1,
    borderColor: Colors.BORDER,
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(2),
    maxHeight: responsiveHeight(40),
  }),
  inputTitle: isLightMode => ({
    fontSize: getResponsiveFontSize(16),
    includeFontPadding: false,
    marginBottom: responsiveHeight(2),
    color: isLightMode ? Colors.BLACK : Colors.WHITE,
  }),
  errorLabel: {
    marginTop: responsiveHeight(0.5),
    fontSize: getResponsiveFontSize(14),
    includeFontPadding: false,
    color: Colors.RED_ACTIVE,
  },
  textInput: isLightMode => ({
    fontSize: getResponsiveFontSize(16),
    color: isLightMode ? Colors.BLACK : Colors.WHITE,
    includeFontPadding: false,
    padding: 0,
    margin: 0,
    paddingHorizontal: 16,
    flex: 1,
  }),
});
