import React, {PureComponent} from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import {connect} from 'react-redux';
import FAB from '../../components/FAB';
import TaskCard from '../../components/TaskCard';
import {styles} from './style';
import {commonStyles} from '../../themes/commonStyles';
import {Button} from '../../components/Button';
import {AddTaskModal} from '../../components/AddTaskModal';
import {
  REQUEST_ADD_TASK,
  REQUEST_DELETE_TASK,
  REQUEST_UPDATE_TASK,
  REQUEST_FETCH_TASK_LIST,
} from '../../redux/actions/listAction';
import idx from 'idx';
import Toast from 'react-native-simple-toast';
import Header from '../../components/Header';

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isAddTaskModalVisible: false,
      selectedTask: {},
    };
  }

  _renderListItem = (item, index) => {
    return (
      <TaskCard
        onEdit={data =>
          this.setState({selectedTask: data, isAddTaskModalVisible: true})
        }
        onMarkComplete={this._onMarkComplete}
        onDelete={data => this._alertDeleteTask(data)}
        key={index}
        data={item}
      />
    );
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

  _alertDeleteTask = task => {
    Alert.alert(
      '',
      'Are you sure? You want to delete this task?',
      [
        {
          text: 'NO',
        },
        {
          text: 'YES',
          onPress: () => this.props.callDeleteTask(task),
        },
      ],
      {cancelable: false},
    );
  };

  _onSubmitData = async data => {
    const {callAddTask} = this.props;
    await callAddTask(data, resp => {
      const status = idx(resp, _ => _.status) || '';
      if (status === 200) {
        this.setState({isAddTaskModalVisible: false, selectedTask: {}});
        Toast.show('Task added successfully!');
      } else {
        Toast.show('Something went wrong!');
      }
    });
  };

  _onUpdateData = async data => {
    const {callUpdateTask} = this.props;
    await callUpdateTask(data, resp => {
      const status = idx(resp, _ => _.status) || '';
      if (status === 200) {
        this.setState({isAddTaskModalVisible: false, selectedTask: {}});
        Toast.show('Task updated successfully!');
      } else {
        Toast.show('Something went wrong!');
      }
    });
  };

  _onMarkComplete = async data => {
    const {callUpdateTask} = this.props;
    const cloneData = {...data};
    cloneData.isCompleted = !cloneData.isCompleted;
    await callUpdateTask(cloneData, resp => {
      const status = idx(resp, _ => _.status) || '';
      if (status === 200) {
        Toast.show('Task updated successfully!');
      } else {
        Toast.show('Something went wrong!');
      }
    });
  };

  render() {
    const {listData} = this.props;
    const {isAddTaskModalVisible, selectedTask} = this.state;
    return (
      <View style={styles.container}>
        <Header title={'My Todo List'} />
        <AddTaskModal
          selectedTask={selectedTask}
          isEditMode={Object.keys(selectedTask).length > 0}
          onSubmit={this._onSubmitData}
          onUpdate={this._onUpdateData}
          onRequestClose={() =>
            this.setState({isAddTaskModalVisible: false, selectedTask: {}})
          }
          isVisible={isAddTaskModalVisible}
        />
        {listData.length > 0 ? (
          <FlatList
            data={listData.sort((a, b) => !b.isCompleted - !a.isCompleted)}
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
  return {
    callAddTask: (data, callback) =>
      dispatch({type: REQUEST_ADD_TASK, data, callback}),
    callUpdateTask: (data, callback) =>
      dispatch({type: REQUEST_UPDATE_TASK, data, callback}),
    callDeleteTask: data => dispatch({type: REQUEST_DELETE_TASK, data}),
    callListTask: () => dispatch({type: REQUEST_FETCH_TASK_LIST}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
