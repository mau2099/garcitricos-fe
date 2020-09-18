import { GenericError } from 'types/GenericError';
import { GenericItem } from 'types/GenericItem';

/* --- STATE --- */
export interface GlobalSagaState {
  menu: {
    open: boolean;
  };
  commodities: {
    data: GenericItem[];
    loading: boolean;
    error: GenericError | null;
  };
}

export type ContainerState = GlobalSagaState;
