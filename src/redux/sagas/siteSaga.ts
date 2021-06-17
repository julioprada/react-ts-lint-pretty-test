import { takeLatest } from 'redux-saga/effects';

import * as c from '@redux/constants';

export function* testActionSaga() {
  yield alert('saga');
}

const siteSaga = [takeLatest(c.TEST, testActionSaga)];

export default siteSaga;
