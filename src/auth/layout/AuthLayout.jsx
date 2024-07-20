import { Grid, Typography } from '@mui/material'
import React from 'react'

export const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid
            container
            component="main"
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: '4' }}
        >
            <Grid
                item
                className="box-shadow"
                xs={3}
                sx={{
                    width: { sm: 450 },
                    minHeight: 500,
                    padding: 3,
                    borderRadius: 2,
                    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjH-epHk4LX6ZmANCBBHgYd3XWqn2C0q6_Q&s)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <Grid
                item
                className="box-shadow"
                spacing={0}
            direction="row"
                alignItems="center"
                justifyContent="center"
                xs={3}
                sx={{
                    minHeight: 500,
                    width: { sm: 450 },
                    background: 'white',
                    padding: 3,
                    borderRadius: 2
                }}
            >
                <Typography variant="h5" sx={{ mb: 1 }}>{title}</Typography>
                {children}
            </Grid>
        </Grid>
    )
}
