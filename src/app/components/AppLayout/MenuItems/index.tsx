import React from 'react';
import { ROUTES } from 'app/routes';
import { BarChart, Dashboard, AttachMoney } from '@material-ui/icons';

interface MenuItem {
  tooltip: string;
  route: any;
  icon?: any;
  className?: string;
  handleClick: (history) => void;
}

export const menuItems: MenuItem[] = [
  {
    tooltip: 'Sales',
    route: ROUTES.SALES,
    icon: <AttachMoney />,
    handleClick: history => {
      history.push(ROUTES.SALES);
    },
  },
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
