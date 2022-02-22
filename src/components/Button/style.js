import {StyleSheet} from 'react-native';
import {
  responsiveWidth,
  getResponsiveFontSize,
  responsiveHeight,
} from '../../utils/scalingUtils';
import * as Colors from './../../themes/colors';

export const styles = StyleSheet.create({
  buttonContainer: (disabled, isHollowButton) => ({
    flexDirection: 'row',
    backgroundColor: isHollowButton ? 'transparent' : Colors.WHITE,
    height: responsiveHeight(7),
    borderRadius: 6,
    borderColor: isHollowButton ? Colors.WHITE : Colors.BLACK,
    borderWidth: isHollowButton ? 1 : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: disabled ? 0.5 : 1,
  }),
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linearGradient: {
    borderRadius: 6,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(7),
  },
  buttonText: isHollowButton => ({
    fontSize: getResponsiveFontSize(16),
    includeFontPadding: false,
    color: isHollowButton ? Colors.WHITE : Colors.BLACK,
    marginHorizontal: responsiveWidth(2),
  }),
  hollowBtnText: {
    color: Colors.WHITE,
  },
});
