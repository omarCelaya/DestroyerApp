import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Logo from "./Logo"
import instalacion from "../img/puertas-automatica.jpg"
import puerta from "../img/horizontalpuertas2.png"

const height1 = 250;
export const CBanner = () => {
    return (
<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '2rem', backgroundColor: "#f5f5f5" }}>
      <Grid container sx={{ width: { xs: '100%', md: '80%' }, rowSpacing: 2, columnSpacing: { xs: 1, sm: 2, md: 3 }, justifyContent: 'center', alignItems: 'center' }}>
        <Grid item xs={12} md={4} sx={{
          height: height1, backgroundColor: "#f5f5f5", display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Logo />
        </Grid>
        <Grid item xs={12} md={4} sx={{
          height: height1, backgroundColor: "#f5f5f5", display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img src={instalacion} alt="imag" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Grid>
        <Grid item xs={12} md={4} sx={{
          height: height1, backgroundColor: "#f5f5f5", display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Typography
            fontWeight="1000"
            padding=".5rem"
            fontSize="2.8rem"
            textAlign="center"
            sx={{
              color: 'red',
              borderRadius: '5px',
            }}
          >
            + 10 años de experiencia en la industria
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{
          height: height1, backgroundColor: "#f5f5f5", display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img src={puerta} alt="imag" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Grid>
        <Grid item xs={12} md={4} sx={{
          height: height1, backgroundColor: "#f5f5f5", display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Typography
            fontWeight="1000"
            padding=".5rem"
            fontSize="2.8rem"
            textAlign="center"
            sx={{
              color: 'red',
              borderRadius: '5px',
            }}
          >
            Empresa líder en Sonora
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{
          height: height1, backgroundColor: "#f5f5f5", display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Typography
            fontWeight="1000"
            padding=".5rem"
            fontSize="2.8rem"
            textAlign="center"
            sx={{
              color: 'red',
              borderRadius: '5px',
            }}
          >
            Más de 2000 Clientes satisfechos
          </Typography>
        </Grid>
      </Grid>
    </Box>
    )
}
