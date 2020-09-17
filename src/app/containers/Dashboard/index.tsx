/**
 *
 * Dashboard
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectDashboard } from './selectors';
import { dashboardSaga } from './saga';

import { Container, Grid, Paper, Box } from '@material-ui/core';
interface Props {}

export const Dashboard = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: dashboardSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dashboard = useSelector(selectDashboard);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t: translate, i18n } = useTranslation();

  const scope = translations.app.containers.dashboard;

  return (
    <>
      <Helmet>
        <title>{translate(scope.meta.title)}</title>
        <meta name="description" content={translate(scope.meta.description)} />
      </Helmet>
      <Container maxWidth="lg" style={{ backgroundColor: 'red' }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper>'Chart'</Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper>'Deposits'</Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper>'Orders'</Paper>
          </Grid>
        </Grid>
        <Box pt={4}></Box>
      </Container>
    </>
  );
});
