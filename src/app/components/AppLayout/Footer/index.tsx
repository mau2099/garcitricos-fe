import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from '@material-ui/core';
import { Restore, Favorite, LocationOn } from '@material-ui/icons';
import './style.scss';

export const Footer = () => {
  return (
    <Box bgcolor="primary.main" className="applayout__footer">
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Recents" icon={<Restore />} />
        <BottomNavigationAction label="Favorites" icon={<Favorite />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
      </BottomNavigation>

      {/* <Typography variant="body2" color="textSecondary" align="center">
        // {`Garcitricos - Copyright © ${new Date().getFullYear()}`}
      </Typography>  */}
    </Box>
  );
};
