import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';
import { RepositoriesState } from './types';


export function* load() {
  try {
    const response:RepositoriesState = yield call(api.get, 'users/wandersonchaves/repos');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
