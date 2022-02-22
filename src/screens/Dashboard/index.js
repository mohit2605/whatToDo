import React, {PureComponent} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import FAB from '../../components/FAB';
import TaskCard from '../../components/TaskCard';
import {styles} from './style';
import {commonStyles} from '../../themes/commonStyles';
import {Button} from '../../components/Button';

class Dashboard extends PureComponent {
  _renderListItem = (item, index) => {
    return <TaskCard key={index} data={item} />;
  };

  _renderNoTaskView = () => {
    return (
      <View style={styles.noTaskContainer}>
        <Text style={[commonStyles.SEMI_BOLD_20, styles.mainText]}>
          {'NO TASKS SAVED YET!'}
        </Text>
        <Button title="Create new task" wrapperStyle={styles.createBtn} />
      </View>
    );
  };

  render() {
    const {listData} = this.props;
    return (
      <View style={styles.container}>
        {listData.length > 0 ? (
          <FlatList
            data={listData}
            extraData={listData}
            contentContainerStyle={styles.listScroll}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => this._renderListItem(item, index)}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          this._renderNoTaskView()
        )}
        {listData.length > 0 && <FAB />}
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {listReducer} = state;
  const {listData} = listReducer;
  return {listData};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
