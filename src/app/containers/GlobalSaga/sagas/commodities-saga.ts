import { call, put } from 'redux-saga/effects';
import { actions } from '../slice';
import { request } from 'utils/request';

import { apiBaseUrl } from 'utils/api-routes';
import { apiEndpoints } from 'utils/api-endpoints';

const { peopleRoot } = apiEndpoints;

export function* getCommoditiesList() {
  const requestURL = `${apiBaseUrl}/${peopleRoot}`;

  try {
    const response = yield call(request, requestURL);
    if (response.type === 4) {
      yield put(actions.commoditiesError({ detail: response.message }));
    } else {
      const commodities = response.results;
      yield put(actions.commoditiesLoaded(commodities));
    }
  } catch (error) {
    yield put(
      actions.commoditiesError({
        title: error.name,
        detail: error.message,
      }),
    );
  }
}
