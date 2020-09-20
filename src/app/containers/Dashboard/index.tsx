/**
 *
 * Dashboard
 *
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from 'app/containers/GlobalSaga/slice';
import {
  selectCommoditiesList,
  selectCommoditiesLoading,
} from 'app/containers/GlobalSaga/selectors';

import { Grid, Paper, CircularProgress } from '@material-ui/core';

export const Dashboard = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const commoditiesList = useSelector(selectCommoditiesList);
  const commoditiesLoading = useSelector(selectCommoditiesLoading);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t: translate, i18n } = useTranslation();

  const scope = translations.app.containers.dashboard;

  useEffect(() => {
    dispatch(actions.loadCommoditiesList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>{translate(scope.meta.title)}</title>
        <meta name="description" content={translate(scope.meta.description)} />
      </Helmet>
      <Grid container>
        {/* Chart */}
        <Grid item xs={12} md={6} lg={9}>
          <Paper>Chart</Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={6} lg={3}>
          <Paper>Deposits</Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper>Orders</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            {commoditiesLoading ? (
              <CircularProgress />
            ) : (
              <pre>{JSON.stringify(commoditiesList, null, 2)}</pre>
            )}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
