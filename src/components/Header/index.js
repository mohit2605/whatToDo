import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import DefaultProps from '../../constants/DefaultProps';
import {styles} from './style';

const Header = props => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: DefaultProps.EMPTY_STRING,
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
