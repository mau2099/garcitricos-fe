import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { GenericItem } from 'types/GenericItem';
import { GenericError } from 'types/GenericError';

// The initial state of the Sales container
export const initialState: ContainerState = {
  sales: {
    data: [],
    loading: false,
    error: null,
  },
};

const salesSlice = createSlice({
  name: 'salesSaga',
  initialState,
  reducers: {
    // Sales
    loadSalesList(state) {
      state.sales = {
        data: [],
        loading: true,
        error: null,
      };
    },
    salesLoaded(state, action: PayloadAction<GenericItem[]>) {
      state.sales = {
        data: action.payload,
        loading: false,
        error: null,
      };
    },
    salesError(state, action: PayloadAction<GenericError>) {
      state.sales = {
        ...state.sales,
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const { actions, reducer, name: sliceKey } = salesSlice;
