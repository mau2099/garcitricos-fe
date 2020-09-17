import React from 'react';
import { ROUTES } from 'app/routes';

import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  // ListItemText,
  CardMedia,
} from '@material-ui/core';
import { BarChart, Dashboard as DashboardIcon } from '@material-ui/icons';

import Logo from 'assets/logo.png';

interface SideBarItem {
  tooltip: string;
  route: any;
  icon?: any;
  className?: string;
  handleClick: (history) => void;
}

export const sideBarItems: SideBarItem[] = [
  {
    tooltip: 'Dashboard',
    route: ROUTES.DASHBOARD,
    icon: <DashboardIcon />,
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

export const SideBar = () => {
  return (
    <Drawer variant="permanent" classes={{ paper: 'primary' }}>
      <CardMedia
        image={Logo}
        style={{ backgroundColor: 'red', width: '50px', height: '50px' }}
      />
      <Divider />
      <List>
        {sideBarItems.map(item => (
          <ListItem button>
            <ListItemIcon>{item.icon}</ListItemIcon>

            {/* <ListItemText primary="Dashboard" /> */}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
