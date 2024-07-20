import { FooterRedes } from "./FooterRedes";
import { FooterContact } from "./FooterContact";
import { FooterServices } from "./FooterServices";
import React from 'react'
import { Box, Grid, IconButton, Link, Typography } from "@mui/material"
import Logo from "./Logo"
import { Facebook, Instagram, WhatsApp, LocationOn, Mail, Phone } from "@mui/icons-material";
// import { slideInFromBottom } from "../../animations/animations";
export const Footer = () => {

    return (
        <Grid container className="Main" spacing={0}>
            <Grid
                item
                className="spacing"
                sx={{
                    backgroundColor: "black",
                    width: '100vw',
                    height: '.4vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            ></Grid>
            <Grid
                item
                className="Principal"
                sx={{
                    width: '100vw',
                    height: { xs: 'auto', md: '30vh' },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Grid
                    item xs={12} md={4}
                    className="Redes"
                    sx={{
                        width: { xs: '100%', md: 'auto' },
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: { xs: '1rem', md: '0' }
                    }}
                >
                    <FooterRedes />
                </Grid>
                <Grid
                    item
                    className="ContacUs"
                    xs={12} md={4}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'start',
                        width: { xs: '100%', md: 'auto' },
                        marginBottom: { xs: '1rem', md: '0' }
                    }}
                >
                    <FooterContact />
                </Grid>
                <Grid
                    item
                    xs={12} md={4}
                    className="Servicios"
                    sx={{
                        width: { xs: '100%', md: 'auto' },
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <FooterServices />
                </Grid>
            </Grid>
            <Grid
                item
                padding="0"
                sx={{
                    backgroundColor: 'red',
                    width: '100vw',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Typography
                    fontWeight="100"
                    padding=".5rem"
                    fontSize=".9rem"
                    textAlign="center"
                    sx={{
                        position: 'relative',
                        color: 'white',
                        padding: '.5rem',
                        borderRadius: '5px',
                    }}
                >
                    © 2024 Derechos Reservados Destroyer Puertas Electricas.
                </Typography>
            </Grid>
        </Grid>
    );
};