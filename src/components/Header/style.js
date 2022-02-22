import {Platform, StyleSheet} from 'react-native';
import {getResponsiveFontSize, responsiveWidth} from '../../utils/scalingUtils';
import * as Colors from '../../themes/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: getResponsiveFontSize(16),
    fontWeight: 'bold',
    color: Colors.WHITE,
    marginVertical: responsiveWidth(4),
  },
  container: {
    width: responsiveWidth(100),
    backgroundColor: Colors.APP_DARK_BACKGROUND_800,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
