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

  render() {
    const {listData, callAddTask, callUpdateTask} = this.props;
    const {isAddTaskModalVisible, selectedTask} = this.state;
    return (
      <View style={styles.container}>
        <AddTaskModal
          selectedTask={selectedTask}
          isEditMode={Object.keys(selectedTask).length > 0}
          onSubmit={data =>
            callAddTask(data, resp => {
              const status = idx(resp, _ => _.status) || '';
              if (status === 200) {
                this.setState({isAddTaskModalVisible: false});
                Toast.show('Task added successfully!');
              } else {
                Toast.show('Something went wrong!');
              }
            })
          }
          onUpdate={data => callUpdateTask(data)}
          onRequestClose={() =>
            this.setState({isAddTaskModalVisible: false, selectedTask: {}})
          }
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
  return {
    callAddTask: (data, callback) =>
      dispatch({type: REQUEST_ADD_TASK, data, callback}),
    callUpdateTask: data => dispatch({type: REQUEST_UPDATE_TASK, data}),
    callDeleteTask: data => dispatch({type: REQUEST_DELETE_TASK, data}),
    callListTask: () => dispatch({type: REQUEST_FETCH_TASK_LIST}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
