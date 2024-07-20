import React from 'react';
import { Box } from '@mui/material';
import logo from '../img/Logo2.png';

const Logo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '80vw', sm: '60vw', md: '40vw', lg: '20vw' }
      }}
    >
      <img src={logo} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </Box>
  );
};

export default Logo;