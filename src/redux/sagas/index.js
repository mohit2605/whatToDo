import {takeLatest} from 'redux-saga/effects';
import {
  REQUEST_ADD_TASK,
  REQUEST_DELETE_TASK,
  REQUEST_UPDATE_TASK,
  REQUEST_FETCH_TASK_LIST,
} from '../actions/listAction';
import {
  addTaskSaga,
  deleteTaskSaga,
  listTaskSaga,
  updateTaskSaga,
} from './listSaga';

export function* watcherSaga() {
  yield takeLatest(REQUEST_ADD_TASK, addTaskSaga);
  yield takeLatest(REQUEST_DELETE_TASK, deleteTaskSaga);
  yield takeLatest(REQUEST_UPDATE_TASK, updateTaskSaga);
  yield takeLatest(REQUEST_FETCH_TASK_LIST, listTaskSaga);
}
