import { AppBar, Toolbar, IconButton, Button, Grid, Menu, MenuItem, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import { MenuOutlined, Login } from '@mui/icons-material';
import Logo from "./Logo"

export const NavBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <AppBar position="fixed">
        <Toolbar>
          {isMobile ? (
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleMenuOpen}
              >
                <MenuOutlined />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Servicios</MenuItem>
                <MenuItem onClick={handleMenuClose}>Productos</MenuItem>
                <MenuItem onClick={handleMenuClose}>Nosotros</MenuItem>
                <MenuItem onClick={handleMenuClose}>Contacto</MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <IconButton color="error">
                    <Login />
                  </IconButton>
                </MenuItem>
              </Menu>
              <Logo />
            </Grid>
          ) : (
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Logo />
              <Button color="error">Servicios</Button>
              <Button color="error">Productos</Button>
              <Button color="error">Nosotros</Button>
              <Button color="error">Contacto</Button>
              <IconButton color="error">
                <Login />
              </IconButton>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    );
  };
