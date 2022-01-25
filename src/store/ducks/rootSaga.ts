import { all, takeLatest } from 'redux-saga/effects';

import { RepositoriesState, RepositoriesTypes } from './repositories/types';
import { load } from './repositories/sagas';

export default function* rootSaga() {
  const response: RepositoriesState = yield all([
    takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
  ]);

  return response;
}
