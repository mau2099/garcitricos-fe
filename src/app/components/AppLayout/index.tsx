import React from 'react';
import { Container } from '@material-ui/core';

import { TopBar } from './TopBar';
import { SideBar } from './SideBar';
import { Footer } from './Footer';

export const AppLayout = props => {
  return (
    <>
      <TopBar />
      <SideBar />
      <Container maxWidth="lg">{props.children}</Container>
      <Footer />
    </>
  );
};
