import React from 'react';
import Box from '@mui/material/Box';
import Header from './header';
import Footer from './footer';
import SearchAppBar from './header';
import PrimarySearchAppBar from './header';

const Layout = (props) => {
  const { children } = props

  return (
    <Box minHeight={"100vh"} display={"flex"} width={"100%"} flexDirection={"column"}>
      <PrimarySearchAppBar />

      <Box flex={6} maxHeight={"100%"}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;