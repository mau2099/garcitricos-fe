import React from 'react';
import { Box, Card } from '@material-ui/core';

import { TopBar } from './TopBar';
import { SideBar } from './SideBar';
import { Footer } from './Footer';
import './style.scss';

export const AppLayout = props => {
  return (
    <Box bgcolor="background.default" className="app-layout">
      <TopBar />
      <SideBar />
      <Card className="app-layout__route-container">{props.children}</Card>
      <Footer />
    </Box>
  );
};
