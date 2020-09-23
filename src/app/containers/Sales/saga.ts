import { takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { getSalesList } from './sagas/sales-saga';

export function* salesSaga() {
  yield takeLatest(actions.loadSalesList.type, getSalesList);
}
