import React from 'react';
import {TextInput as Input, View, Text} from 'react-native';
import {styles} from './style';
import DefaultProps from '../../constants/DefaultProps';
import PropTypes from 'prop-types';
import * as Colors from './../../themes/colors';

export const TextInput = props => {
  const {
    title,
    wrapperStyle,
    inputWrapperStyle,
    placeholderTextColor,
    textInputProps,
    inputStyle,
    error,
    isLightMode,
  } = props;
  return (
    <View style={[styles.inputContainer, wrapperStyle]}>
      {title ? (
        <Text style={styles.inputTitle(isLightMode)}>{title}</Text>
      ) : null}
      <View style={[styles.inputWrapper(isLightMode), inputWrapperStyle]}>
        <Input
          returnKeyType="done"
          style={[styles.textInput(isLightMode), inputStyle]}
          placeholderTextColor={placeholderTextColor}
          {...textInputProps}
        />
      </View>
      {error ? <Text style={styles.errorLabel}>* {error}</Text> : null}
    </View>
  );
};

TextInput.defaultProps = {
  placeholderTextColor: Colors.BORDER,
  textInputProps: DefaultProps.EMPTY_OBJECT,
  isLightMode: false,
};

TextInput.propTypes = {
  placeholderTextColor: PropTypes.string,
  textInputProps: PropTypes.object,
  isLightMode: PropTypes.bool,
};
