import {StyleSheet} from 'react-native';
import * as Colors from '../themes/colors';
import {getResponsiveFontSize, responsiveHeight} from '../utils/scalingUtils';

export const commonStyles = StyleSheet.create({
  container: () => ({
    flex: 1,
    backgroundColor: Colors.APP_DARK_BACKGROUND_500,
  }),
  SEMI_BOLD_20: {
    fontSize: getResponsiveFontSize(20),
    fontWeight: '500',
    color: Colors.WHITE,
  },
  SEMI_BOLD_16_BLACK: {
    fontSize: getResponsiveFontSize(16),
    fontWeight: '500',
    includeFontPadding: false,
    color: Colors.BLACK,
  },
  SEMI_BOLD_15_BLACK: {
    fontSize: getResponsiveFontSize(15),
    fontWeight: '500',
    includeFontPadding: false,
    color: Colors.BLACK,
  },
  ERROR_TEXT: {
    fontSize: getResponsiveFontSize(14),
    marginTop: responsiveHeight(2),
    color: Colors.RED_ACTIVE,
    includeFontPadding: false,
  },
  FLEX_ROW_SPACE_BETWEEN: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
