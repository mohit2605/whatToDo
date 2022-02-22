import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import FAB from '../../components/FAB';
import {styles} from './style';

class Dashboard extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
        <FAB />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
