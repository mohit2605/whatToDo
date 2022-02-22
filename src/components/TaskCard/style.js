import {StyleSheet} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../../utils/scalingUtils';
import * as Colors from '../../themes/colors';

export const styles = StyleSheet.create({
  container: isTaskCompleted => ({
    width: '95%',
    backgroundColor: isTaskCompleted ? Colors.BORDER : Colors.WHITE,
    borderRadius: 6,
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(2.5),
    alignSelf: 'center',
    marginBottom: responsiveHeight(2.5),
  }),
  extraTitle: {
    color: Colors.BLACK,
    paddingLeft: responsiveWidth(2),
    includeFontPadding: false,
  },
  titleMainContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  editContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  checkBoxStyle: {
    marginRight: responsiveWidth(2),
  },
});
