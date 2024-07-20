import { WhatsApp } from '@mui/icons-material'
import { Grid, IconButton, Link  } from '@mui/material'
import React from 'react'
import { slideInFromBottom } from '../../animations/animations'

export const Contact = () => {


    return (
        <Grid
            container
        >
            <Link
                href="https://wa.me/5216442352465"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                className='whatsapp_float icon_float'
                sx={{animation: `${slideInFromBottom} 1s ease-out`}} // Aplicamos la animación aquí}}
            >
                <IconButton className='icon_float' color="inherit"  >
                    <WhatsApp fontSize='large' />
                </IconButton>
            </Link>
        </Grid>
    )
}
