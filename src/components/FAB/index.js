import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import DefaultProps from '../../constants/DefaultProps';
import {SvgXml} from 'react-native-svg';
import * as Colors from '../../themes/colors';
import {PLUS} from '../../constants/svg';
import { styles } from './style';

const FAB = props => {
  const {onPress, containerStyle, activeOpacity} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={[styles.floatingContainer, {...containerStyle}]}>
      <SvgXml
        style={styles.locationIcon}
        width={20}
        height={20}
        fill={Colors.BLACK}
        xml={PLUS}
      />
    </TouchableOpacity>
  );
};

FAB.defaultProps = {
  activeOpacity: 0,
  onPress: DefaultProps.noop,
  containerStyle: DefaultProps.EMPTY_OBJECT,
  style: DefaultProps.EMPTY_OBJECT,
  icon: DefaultProps.EMPTY_STRING,
  iconColor: Colors.WHITE,
};

FAB.propTypes = {
  activeOpacity: PropTypes.number,
  onPress: PropTypes.func,
  containerStyle: PropTypes.object,
  style: PropTypes.object,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
};

export default FAB;

