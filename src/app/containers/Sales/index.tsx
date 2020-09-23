/**
 *
 * Sales
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectSalesList, selectSalesLoading } from './selectors';
import { salesSaga } from './saga';

import { Grid, Paper, CircularProgress } from '@material-ui/core';

interface Props {}

export const Sales = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: salesSaga });

  const sales = useSelector(selectSalesList);
  const salesLoading = useSelector(selectSalesLoading);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t: translate, i18n } = useTranslation();

  useEffect(() => {
    dispatch(actions.loadSalesList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Helmet>
        <title>Sales</title>
        <meta name="description" content="Description of Sales" />
      </Helmet>
      <Grid container>
        <Grid item xs={12}>
          <Paper>
            {salesLoading ? (
              <CircularProgress />
            ) : (
              <pre>{JSON.stringify(sales, null, 2)}</pre>
            )}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
});
