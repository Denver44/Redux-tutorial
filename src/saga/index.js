import studentsSagas from './students';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([...studentsSagas]);
}

// yield all is promise.all
// We have to import all saga file and we create a generator function and yield all saga file parallel
