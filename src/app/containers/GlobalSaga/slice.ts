import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { GenericItem } from 'types/GenericItem';
import { GenericError } from 'types/GenericError';

// The initial state of the GlobalSaga container
export const initialState: ContainerState = {
  menu: {
    open: false,
  },
  commodities: {
    data: [],
    loading: false,
    error: null,
  },
};

const globalSagaSlice = createSlice({
  name: 'globalSaga',
  initialState,
  reducers: {
    //MENU
    setMenuState(state, action: PayloadAction<boolean>) {
      state.menu.open = action.payload;
    },

    // COMMODITIES
    loadCommoditiesList(state) {
      state.commodities = {
        data: [],
        loading: true,
        error: null,
      };
    },
    commoditiesLoaded(state, action: PayloadAction<GenericItem[]>) {
      state.commodities = {
        data: action.payload,
        loading: false,
        error: null,
      };
    },
    commoditiesError(state, action: PayloadAction<GenericError>) {
      state.commodities = {
        ...state.commodities,
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const { actions, reducer, name: sliceKey } = globalSagaSlice;
