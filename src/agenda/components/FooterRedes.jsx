import React from 'react'
import { Box, Grid, IconButton, Link } from "@mui/material"
import Logo from "./Logo"
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { slideInFromBottom } from "../../animations/animations";
export const FooterRedes = () => {
    return (
        <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Centrar verticalmente
          alignItems: 'center', // Centrar horizontalmente
        }}
      >
        <Logo />
        <Box
          sx={{
            display: 'table',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link
            href="https://www.facebook.com/profile.php?id=100054399286315"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            <IconButton color="black">
              <Facebook fontSize='small' />
            </IconButton>
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100054399286315"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            <IconButton color="black">
              <Instagram fontSize='small' />
            </IconButton>
          </Link>
          <Link
            href="https://wa.me/5216442352465"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            <IconButton color="black">
              <WhatsApp fontSize='small' />
            </IconButton>
          </Link>
        </Box>
      </Grid>
    )
}
