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
import { NotFoundPage } from './components/NotFoundPage/Loadable';

import { ROUTES } from 'app/routes';

export function App() {
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
            <Redirect exact from={ROUTES.HOME} to={ROUTES.DASHBOARD} />
            <Route extact path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route component={NotFoundPage} />
          </Switch>
          <GlobalStyle />
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
