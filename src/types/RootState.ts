import { DashboardState } from 'app/containers/Dashboard/types';
import { GlobalSagaState } from 'app/containers/GlobalSaga/types';
import { SalesState } from 'app/containers/Sales/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  dashboard?: DashboardState;
  globalSaga?: GlobalSagaState;
  salesSaga?: SalesState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
