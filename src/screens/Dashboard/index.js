import React, {PureComponent} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import FAB from '../../components/FAB';
import TaskCard from '../../components/TaskCard';
import {styles} from './style';
import {commonStyles} from '../../themes/commonStyles';
import {Button} from '../../components/Button';
import {AddTaskModal} from '../../components/AddTaskModal';

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isAddTaskModalVisible: false,
    };
  }

  _renderListItem = (item, index) => {
    return <TaskCard key={index} data={item} />;
  };

  _renderNoTaskView = () => {
    return (
      <View style={styles.noTaskContainer}>
        <Text style={[commonStyles.SEMI_BOLD_20, styles.mainText]}>
          {'NO TASKS SAVED YET!'}
        </Text>
        <Button
          onPress={() => this.setState({isAddTaskModalVisible: true})}
          title="Create Task"
          wrapperStyle={styles.createBtn}
        />
      </View>
    );
  };

  render() {
    const {listData} = this.props;
    const {isAddTaskModalVisible} = this.state;
    return (
      <View style={styles.container}>
        <AddTaskModal
          onRequestClose={() => this.setState({isAddTaskModalVisible: false})}
          isVisible={isAddTaskModalVisible}
        />
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
        {listData.length > 0 && (
          <FAB onPress={() => this.setState({isAddTaskModalVisible: true})} />
        )}
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
