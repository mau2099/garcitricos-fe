import { takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { getCommoditiesList } from './sagas/commodities-saga';

export function* globalSaga() {
  yield takeLatest(actions.loadCommoditiesList.type, getCommoditiesList);
}
