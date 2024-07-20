import { Grid, Link, Typography } from '@mui/material'
import React from 'react'

export const FooterServices = () => {
    return (
        <>
            <Typography
                fontWeight="700"
                fontSize="1.2rem"
                textAlign="start"
                sx={{
                    color: 'red',
                    borderRadius: '5px',
                }}
            >
                Servicios
            </Typography>
            <Grid item>
                <Link
                    href="#"
                    rel="noopener noreferrer"
                    underline="hover"
                >
                    <Typography
                        padding=".5rem"
                        fontWeight="300"
                        color="black"
                    >
                        Automatización de puertas
                    </Typography>
                </Link>
                <Link
                    href="#"
                    rel="noopener noreferrer"
                    underline="hover"
                >
                    <Typography
                        padding=".5rem"
                        fontWeight="300"
                        color="black"
                    >
                        Instalación de Puertas Automáticas
                    </Typography>
                </Link>
                <Link
                    href="#"
                    rel="noopener noreferrer"
                    underline="hover"
                >
                    <Typography
                        padding=".5rem"
                        fontWeight="300"
                        color="black"
                    >
                        Servicio a productos
                    </Typography>
                </Link>
                <Link
                    href="#"
                    rel="noopener noreferrer"
                    underline="hover"
                >
                    <Typography
                        padding=".5rem"
                        fontWeight="300"
                        color="black"
                    >
                        Instalación de Interfon
                    </Typography>
                </Link>
            </Grid>
        </>
    )
}
