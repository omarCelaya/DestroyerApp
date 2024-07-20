import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import instalacion from '../img/instalacion.jpg';
import mantenimiento from '../img/mantenimiento.jpg';
import interphone from '../img/interphone.jpg';
export const CServices = () => {
    return (
        <Grid container className="Main" spacing={2} sx={{ padding: '1rem' }}>
            <Grid
                item
                className="Principal"
                xs={12}
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <Typography
                    fontWeight="700"
                    padding=".5rem"
                    fontSize="1.8rem"
                    textAlign="center"
                    sx={{
                        color: 'red',
                        borderRadius: '5px',
                    }}
                >
                    Instalación, mantenimiento de puertas automáticas y otros productos
                </Typography>

                <Grid
                    container
                    spacing={2}
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Grid item xs={12} sm={6} md={4} lg={3} className='box-shadow'>
                        <Card sx={{ maxWidth: 345, height: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={instalacion}
                                    alt="Instalaciones"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Instalaciones
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Realizamos instalación de puertas automáticas y motores para fraccionamientos, casas, comercios e industria.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="error">
                                    Más información
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3} className='box-shadow'>
                        <Card sx={{ maxWidth: 345, height: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={mantenimiento}
                                    alt="Mantenimiento de motores"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Mantenimiento de motores
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Realizamos mantenimiento y reparación de equipos automáticos residenciales, de condominios y fraccionamientos, comerciales e industriales.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="error">
                                    Más información
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3} className='box-shadow'>
                        <Card sx={{ maxWidth: 345, height: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={interphone}
                                    alt="Interphone"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Interphone
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Realizamos instalación y reparación de equipos interphone, así como chapas automáticas de condominios y fraccionamientos, comerciales e industriales.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="error">
                                    Más información
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

                <Typography
                    fontWeight="700"
                    padding=".5rem"
                    fontSize="1rem"
                    textAlign="center"
                    sx={{
                        color: 'black',
                        borderRadius: '5px',
                        marginTop: '1rem',
                    }}
                >
                    ¿Necesitas reparación o instalación de puertas eléctricas? Estamos listos para atenderte.
                </Typography>
                <Typography
                    fontWeight="700"
                    padding=".5rem"
                    fontSize="1rem"
                    textAlign="center"
                    sx={{
                        color: 'black',
                        borderRadius: '5px',
                        marginBottom: '1rem',
                    }}
                >
                    ¡Llámanos HOY! +5216442352465 y pide una cotización o informes.
                </Typography>
            </Grid>
        </Grid>
    )
}
