import { call, put } from 'redux-saga/effects';
import { RepositoriesState } from './types';
import { loadFailure, loadSuccess } from './actions';
import api from '../../../services/api';

export function* load() {
  try {
    const response: RepositoriesState = yield call(
      api.get,
      'users/diego3g/repos',
    );

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
