import idx from 'idx';
import {call, put} from 'redux-saga/effects';
import {
  REQUEST_ADD_TASK_SUCCESS,
  REQUEST_ADD_TASK_ERROR,
  REQUEST_DELETE_TASK_SUCCESS,
  REQUEST_DELETE_TASK_ERROR,
  REQUEST_UPDATE_TASK_SUCCESS,
  REQUEST_UPDATE_TASK_ERROR,
  REQUEST_FETCH_TASK_LIST_SUCCESS,
  REQUEST_FETCH_TASK_LIST_ERROR,
} from '../actions/listAction';
import {addTask, deleteTask, listTask, updateTask} from '../Api';

export function* addTaskSaga(action) {
  try {
    const res = yield call(addTask, action.data);
    const status = idx(res, _ => _.status) || '';
    const data = idx(res, _ => _.data) || {};
    if (status === 200) {
      yield put({type: REQUEST_ADD_TASK_SUCCESS, data});
      action.callback && action.callback({status, data});
    } else {
      yield put({type: REQUEST_ADD_TASK_ERROR, data});
      action.callback && action.callback({status, data});
    }
  } catch (error) {
    yield put({type: REQUEST_ADD_TASK_ERROR, error});
    action.callback && action.callback({error});
  }
}

export function* deleteTaskSaga(action) {
  try {
    const res = yield call(deleteTask, action.data);
    const status = idx(res, _ => _.status) || '';
    const data = idx(res, _ => _.data) || {};
    if (status === 200) {
      yield put({type: REQUEST_DELETE_TASK_SUCCESS, data});
    } else {
      yield put({type: REQUEST_DELETE_TASK_ERROR, data});
    }
  } catch (error) {
    yield put({type: REQUEST_DELETE_TASK_ERROR, error});
  }
}

export function* updateTaskSaga(action) {
  try {
    const res = yield call(updateTask, action.data);
    const status = idx(res, _ => _.status) || '';
    const data = idx(res, _ => _.data) || {};
    if (status === 200) {
      yield put({type: REQUEST_UPDATE_TASK_SUCCESS, data});
    } else {
      yield put({type: REQUEST_UPDATE_TASK_ERROR, data});
    }
  } catch (error) {
    yield put({type: REQUEST_UPDATE_TASK_ERROR, error});
  }
}

export function* listTaskSaga(action) {
  try {
    const res = yield call(listTask, action.data);
    const status = idx(res, _ => _.status) || '';
    const data = idx(res, _ => _.data) || {};
    if (status === 200) {
      yield put({type: REQUEST_FETCH_TASK_LIST_SUCCESS, data});
    } else {
      yield put({type: REQUEST_FETCH_TASK_LIST_ERROR, data});
    }
  } catch (error) {
    yield put({type: REQUEST_FETCH_TASK_LIST_ERROR, error});
  }
}
