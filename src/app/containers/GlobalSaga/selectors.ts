import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.globalSaga || initialState;

export const selectGlobalSaga = createSelector(
  [selectDomain],
  globalSagaState => globalSagaState,
);

export const selectMenuState = createSelector(
  [selectDomain],
  globalState => globalState.menu.open,
);

export const selectCommoditiesList = createSelector(
  [selectDomain],
  globalState => globalState.commodities.data,
);

export const selectCommoditiesLoading = createSelector(
  [selectDomain],
  globalState => globalState.commodities.loading,
);
