/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import { ThemeProvider } from '@material-ui/core';
import { theme } from 'styles/custom-theme';

import { AppLayout } from './components/AppLayout';
import { Dashboard } from './containers/Dashboard/Loadable';
import { Sales } from './containers/Sales/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './containers/GlobalSaga/slice';
import { globalSaga } from './containers/GlobalSaga/saga';

import { ROUTES } from 'app/routes';

export function App() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: globalSaga });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Helmet titleTemplate="%s - Garcitricos" defaultTitle="Garcitricos">
          <meta name="description" content="Garcitricos ©" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Helmet>
        <AppLayout>
          <Switch>
            <Redirect exact from={ROUTES.HOME} to={ROUTES.SALES} />
            <Route extact path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route extact path={ROUTES.SALES} component={Sales} />
            <Route component={NotFoundPage} />
          </Switch>
          <GlobalStyle />
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
