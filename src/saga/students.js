import {
  takeEvery,
  takeLatest,
  take,
  call,
  fork,
  put,
} from 'redux-saga/effects';
import * as actions from '../actions/students';
import { getAllStudents, createStudent, deleteStudent } from '../api/student';

function* getStudents() {
  try {
    const result = yield call(getAllStudents);
    yield put(actions.fetchStudentSuccess({ items: result.data }));
  } catch (error) {
    yield put(
      actions.studentError({
        error: 'An Error occurred while fetching all students data',
      })
    );
  }
}
// It will take all the request
function* watchGetStudentsRequests() {
  yield takeEvery(actions.Types.GET_STUDENTS_REQUEST, getStudents);
}

function* createStudents(action) {
  try {
    yield call(createStudent, action.payload);
    yield call(getStudents);
  } catch (error) {
    yield put(
      actions.studentError({
        error: 'An Error occurred while creating all student data',
      })
    );
  }
}
// It will take the latest action
function* watchCreateStudent() {
  yield takeLatest(actions.Types.CREATE_STUDENTS_REQUEST, createStudents);
}

function* deleteStudents(studentId) {
  try {
    yield call(deleteStudent, studentId);
    yield call(getStudents);
  } catch (error) {
    yield put(
      actions.studentError({
        error: 'An Error occurred while deleting student data',
      })
    );
  }
}

// Take will block till that request is not completed
function* watchDeleteStudentRequest() {
  while (true) {
    const action = yield take(actions.Types.DELETE_STUDENTS_REQUEST);
    yield call(deleteStudents, {
      studentId: action.payload.studentId,
    });
  }
}

const studentsSagas = [
  fork(watchGetStudentsRequests),
  fork(watchCreateStudent),
  fork(watchDeleteStudentRequest),
];
export default studentsSagas;

// We have our root saga and all our watcherSaga will be forked from our StudentSaga
// And all will run in separate process
// Because of this all separate process we can catch error gracefully and it will run parallel
// Error in one process will not effect other process that's why we use fork.
