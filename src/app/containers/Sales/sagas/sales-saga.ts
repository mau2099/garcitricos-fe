import { call, put } from 'redux-saga/effects';
import { actions } from '../slice';
import { request } from 'utils/request';

import { apiBaseUrl } from 'utils/api-routes';
import { apiEndpoints } from 'utils/api-endpoints';

const { salesRoot } = apiEndpoints;

export function* getSalesList() {
  const requestURL = `${apiBaseUrl}/${salesRoot}`;

  try {
    const response = yield call(request, requestURL);
    if (response.type === 4) {
      yield put(actions.salesError({ detail: response.message }));
    } else {
      const sales = response.data;
      yield put(actions.salesLoaded(sales));
    }
  } catch (error) {
    yield put(
      actions.salesError({
        title: error.name,
        detail: error.message,
      }),
    );
  }
}
