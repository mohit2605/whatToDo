import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator, View} from 'react-native';
import {WHITE} from '../../themes/colors';
import {styles} from './style';
import {SvgXml} from 'react-native-svg';
import PropTypes from 'prop-types';
import DefaultProps from '../../constants/DefaultProps';

export const Button = props => {
  const {
    title,
    onPress,
    wrapperStyle,
    disabled,
    isLoading,
    renderIcon,
    renderOnlyIcon,
    icon,
    titleStyle,
    isHollowButton,
    loaderColor,
  } = props;
  const isDisabled = disabled || isLoading;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      disabled={isDisabled}
      style={[styles.buttonContainer(isDisabled, isHollowButton), wrapperStyle]}
      onPress={() => {
        if (onPress) {
          onPress();
        }
      }}>
      <View style={styles.titleContainer}>
        {renderIcon ? <SvgXml width={25} height={25} xml={icon} /> : null}
        {isLoading || renderOnlyIcon ? null : (
          <Text style={[styles.buttonText(isHollowButton), titleStyle]}>
            {title}
          </Text>
        )}
        {isLoading ? <ActivityIndicator color={loaderColor} /> : null}
      </View>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  loaderColor: WHITE,
  title: DefaultProps.EMPTY_STRING,
  onPress: DefaultProps.noop,
  disabled: false,
  isLoading: false,
  renderOnlyIcon: false,
  isHollowButton: false,
  renderIcon: false,
  gradientColors: ['#D2303C', '#7D00C9'],
};

Button.propTypes = {
  loaderColor: PropTypes.string,
  title: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  renderOnlyIcon: PropTypes.bool,
  isHollowButton: PropTypes.bool,
  renderIcon: PropTypes.bool,
  gradientColors: PropTypes.array,
};
