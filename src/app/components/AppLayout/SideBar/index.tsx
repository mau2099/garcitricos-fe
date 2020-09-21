import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardMedia,
} from '@material-ui/core';

import Logo from 'assets/logo.png';

import { menuItems } from 'app/components/AppLayout/MenuItems';

import { useSelector, useDispatch } from 'react-redux';
import { actions } from 'app/containers/GlobalSaga/slice';
import { selectMenuState } from 'app/containers/GlobalSaga/selectors';

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
        {menuItems.map(item => (
          <ListItem
            button
            alignItems="center"
            onClick={() => item.handleClick(history)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>

            <ListItemText primary={item.tooltip} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
