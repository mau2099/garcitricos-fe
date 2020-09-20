import React from 'react';
import { useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { actions } from 'app/containers/GlobalSaga/slice';
import { selectMenuState } from 'app/containers/GlobalSaga/selectors';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  ButtonGroup,
} from '@material-ui/core';
import { Menu, Notifications } from '@material-ui/icons';
import './style.scss';

export const TopBar = () => {
  const location = useLocation();
  const menuState = useSelector(selectMenuState);
  const dispatch = useDispatch();

  const handleClickMenu = () => {
    dispatch(actions.setMenuState(!menuState));
  };
  return (
    <AppBar position="sticky" className="topbar">
      <Toolbar variant="regular" className="toolbar">
        <IconButton
          color="inherit"
          aria-label="open menu"
          onClick={handleClickMenu}
        >
          <Menu />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap>
          {`${location.pathname.replace('/', ' ')}`}
        </Typography>
        <ButtonGroup color="default" aria-label="outlined primary button group">
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <Notifications />
            </Badge>
          </IconButton>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};
