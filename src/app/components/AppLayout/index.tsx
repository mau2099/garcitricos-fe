import React from 'react';
import { TopBar } from './TopBar';
import { SideBar } from './SideBar';
import { Footer } from './Footer';

import { Container } from '@material-ui/core';
export const AppLayout = props => {
  return (
    <>
      <TopBar />
      <SideBar />

      <Container maxWidth="lg" style={{ backgroundColor: 'red' }}>
        >{props.children}
      </Container>
      <Footer />
    </>
  );
};
