import React from 'react';
import { Box } from '@material-ui/core';

import { TopBar } from './TopBar';
import { SideBar } from './SideBar';
import { Footer } from './Footer';

export const AppLayout = props => {
  return (
    <>
      <TopBar />
      <SideBar />
      <Box maxWidth="lg" style={{ backgroundColor: 'red', height: '100%' }}>
        {props.children}
      </Box>
      <Footer />
    </>
  );
};
