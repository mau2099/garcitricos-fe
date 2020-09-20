import React from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'app/routes';

import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  CardMedia,
} from '@material-ui/core';
import { BarChart, Dashboard as DashboardIcon } from '@material-ui/icons';

import Logo from 'assets/logo.png';

import { useSelector, useDispatch } from 'react-redux';
import { actions } from 'app/containers/GlobalSaga/slice';
import { selectMenuState } from 'app/containers/GlobalSaga/selectors';

interface SideBarItem {
  tooltip: string;
  route: any;
  icon?: any;
  className?: string;
  handleClick: (history) => void;
}

const sideBarItems: SideBarItem[] = [
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
  const menuState = useSelector(selectMenuState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleToogleDrawer = open => event => {
    if (event.type === 'keydown' && event.key !== 'Escape') return;
    dispatch(actions.setMenuState(open));
  };

  return (
    <Drawer
      variant="temporary"
      classes={{ paper: 'primary' }}
      open={menuState}
      onClick={handleToogleDrawer(false)}
      onKeyDown={handleToogleDrawer(false)}
    >
      <CardMedia image={Logo} />
      <Divider />
      <List>
        {sideBarItems.map(item => (
          <ListItem
            button
            alignItems="center"
            onClick={() => item.handleClick(history)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>

            {/* <ListItemText primary="Dashboard" /> */}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
