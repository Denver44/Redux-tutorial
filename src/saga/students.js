import {
  takeEvery,
  takeLatest,
  take,
  call,
  fork,
  put,
} from "redux-saga/effects";
import * as actions from "../actions/students";
import { getAllStudents, createStudent, deleteStudent } from "../api/student";

function* getStudents() {
  try {
    const result = yield call(getAllStudents);
    yield put(actions.fetchStudentSuccess({ items: result.data }));
  } catch (error) {
    yield put(
      actions.studentError({
        error: "An Error occurred while fetching all students data",
      })
    );
  }
}

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
        error: "An Error occurred while creating all student data",
      })
    );
  }
}

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
        error: "An Error occurred while deleting student data",
      })
    );
  }
}

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
