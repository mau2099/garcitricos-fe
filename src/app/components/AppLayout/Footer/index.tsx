import React from 'react';
import { Typography } from '@material-ui/core';

export const Footer = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`Garcitricos - Copyright © ${new Date().getFullYear()}`}
    </Typography>
  );
};
