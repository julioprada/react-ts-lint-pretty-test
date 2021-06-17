import { all } from 'redux-saga/effects';

import siteSaga from './siteSaga';

export default function* rootSaga() {
  yield all([...siteSaga]);
}
