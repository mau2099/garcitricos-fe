import React from 'react';
import { ROUTES } from 'app/routes';
import { BarChart, Dashboard } from '@material-ui/icons';

interface MenuItem {
  tooltip: string;
  route: any;
  icon?: any;
  className?: string;
  handleClick: (history) => void;
}

export const menuItems: MenuItem[] = [
  {
    tooltip: 'Dashboard',
    route: ROUTES.DASHBOARD,
    icon: <Dashboard />,
    handleClick: history => {
      history.push(ROUTES.DASHBOARD);
    },
  },
  {
    tooltip: 'Reports',
    route: ROUTES.REPORTS,
    icon: <BarChart />,
    handleClick: history => {
      history.push(ROUTES.REPORTS);
    },
  },
];
