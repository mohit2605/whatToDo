import {CLEAR_STATE} from '../actions/commonAction';
import {
  REQUEST_ADD_TASK_SUCCESS,
  REQUEST_UPDATE_TASK_SUCCESS,
  REQUEST_DELETE_TASK_SUCCESS,
  REQUEST_FETCH_TASK_LIST_SUCCESS,
} from '../actions/listAction';
import uuid from 'react-native-uuid';

const initialState = {
  listData: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ADD_TASK_SUCCESS:
      return {
        listData: [...state.listData, {_id: uuid.v4(), name: action.data}],
      };
    case REQUEST_UPDATE_TASK_SUCCESS:
      return {
        listData: action.data,
      };
    case REQUEST_DELETE_TASK_SUCCESS:
      return {
        listData: action.data,
      };
    case REQUEST_FETCH_TASK_LIST_SUCCESS:
      return {
        listData: action.data,
      };
    case CLEAR_STATE: {
      return initialState;
    }
    default:
      return state;
  }
};

export default listReducer;
