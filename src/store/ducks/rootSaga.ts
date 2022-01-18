import { all, takeLatest } from 'redux-saga/effects';
import { load } from './repositories/sagas';
import { RepositoriesTypes, RepositoriesState } from './repositories/types';

export default function* rootSaga() {
  const response: RepositoriesState = yield all([
    takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
  ]);

  return response;
}
