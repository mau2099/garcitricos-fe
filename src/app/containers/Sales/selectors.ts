import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.salesSaga || initialState;

export const selectSales = createSelector(
  [selectDomain],
  salesState => salesState,
);

export const selectSalesList = createSelector(
  [selectDomain],
  salesState => salesState.sales.data,
);

export const selectSalesLoading = createSelector(
  [selectDomain],
  salesState => salesState.sales.loading,
);

export const selectSalesError = createSelector(
  [selectDomain],
  salesState => salesState.sales.error,
);
