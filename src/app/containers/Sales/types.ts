import { GenericError } from 'types/GenericError';
import { GenericItem } from 'types/GenericItem';

/* --- STATE --- */
export interface SalesState {
  sales: {
    data: GenericItem[];
    loading: boolean;
    error: GenericError | null;
  };
}

export type ContainerState = SalesState;
