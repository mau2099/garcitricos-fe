import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
} from '@material-ui/core';
import { Menu, Notifications } from '@material-ui/icons';

export const TopBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
          <Menu />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap>
          Dashboard
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <Notifications />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
