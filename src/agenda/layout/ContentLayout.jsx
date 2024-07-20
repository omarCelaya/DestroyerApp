import { Card, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
export const ContentLayout = ({ orden, header, body, imagen }) => {

    if (orden===1) {
        return (
            <Grid
                container
                spacing={0}
                sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Grid
                    item
                    className="spacing"
                    sx={{
                        backgroundColor: "black",
                        width: { xs: '90vw', sm: '80vw', md: '70vw', lg: '60vw', xl: '50vw' },
                        height: '.2vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                />
                <Grid
                    item
                    className="Principal"
                    container
                    sx={{
                        width: '90vw',
                        position: 'relative',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' }
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            padding: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            fontWeight="500"
                            padding=".5rem"
                            fontSize="1.2rem"
                            textAlign="justify"
                            sx={{
                                color: 'red',
                                borderRadius: '5px',
                                marginBottom: '1rem'
                            }}
                        >
                            {header}
                        </Typography>
                        <Typography
                            fontWeight="100"
                            fontSize="1rem"
                            textAlign="justify"
                            sx={{
                                borderRadius: '5px',
                            }}
                        >
                            {body}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            width: '100%',
                            padding: '1.5rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Card sx={{ width: '100%', maxHeight: '100%' }}>
                            <CardMedia
                                component="img"
                                image={imagen}
                                alt="green iguana"
                                sx={{
                                    maxHeight: { xs: '40vh', md: '60vh', lg: '80vh' },
                                    width: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        )
    } else {
        return (
            <Grid
                container
                spacing={0}
                sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Grid
                    item
                    className="spacing"
                    sx={{
                        backgroundColor: "black",
                        width: { xs: '90vw', sm: '80vw', md: '70vw', lg: '60vw', xl: '50vw' },
                        height: '.2vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                />
                <Grid
                    item
                    className="Principal"
                    container
                    sx={{
                        width: '90vw',
                        position: 'relative',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' }
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            width: '100%',
                            padding: '1.5rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Card sx={{ width: '100%', maxHeight: '100%' }}>
                            <CardMedia
                                component="img"
                                image={imagen}
                                alt="green iguana"
                                sx={{
                                    maxHeight: { xs: '40vh', md: '60vh', lg: '80vh' },
                                    width: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </Card>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            padding: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            fontWeight="500"
                            padding=".5rem"
                            fontSize="1.2rem"
                            textAlign="justify"
                            sx={{
                                color: 'red',
                                borderRadius: '5px',
                                marginBottom: '1rem'
                            }}
                        >
                            {header}
                        </Typography>
                        <Typography
                            fontWeight="100"
                            fontSize="1rem"
                            textAlign="justify"
                            sx={{
                                borderRadius: '5px',
                            }}
                        >
                            {body}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
