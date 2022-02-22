import React, {PureComponent} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import FAB from '../../components/FAB';
import TaskCard from '../../components/TaskCard';
import {styles} from './style';

const DATA_ARRAY = [
  {name: 'TEST1'},
];

class Dashboard extends PureComponent {
  _renderListItem = (item, index) => {
    return <TaskCard key={index} data={item} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA_ARRAY}
          extraData={DATA_ARRAY}
          contentContainerStyle={styles.listScroll}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => this._renderListItem(item, index)}
          keyExtractor={(item, index) => index.toString()}
        />
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
