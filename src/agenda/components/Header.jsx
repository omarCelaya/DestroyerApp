import { Grid, Typography } from "@mui/material"

export const Header = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ width: '100vw' }} // Asegúrate de que el Grid ocupe toda la altura de la ventana
            className="hero"
        >
            <Grid
                item
                xs={12}
                className="color-overlay"
                sx={{
                    backgroundImage: 'url(https://portoneselectricos.com.mx/wp-content/uploads/2021/03/Banner-Puertas-Americanas-8.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex', // Usa flexbox para centrar el contenido
                    justifyContent: 'center',
                    alignItems: 'center',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Color negro con 50% de opacidad para oscurecer la imagen
                        zIndex: 1, // Asegúrate de que la superposición esté detrás del contenido
                    },
                }}
            >
                <Typography
                    fontWeight="200"
                    padding="1rem"
                    fontSize="3.5rem"
                    textAlign="center" // Centrar el texto dentro del Typography
                    sx={{
                        position: 'relative', // Necesario para que el texto esté por encima de la superposición
                        zIndex: 2, // Asegúrate de que el texto esté por encima de la superposición
                        color: 'white', // Color del texto en blanco
                        padding: '1rem',
                        borderRadius: '5px', // Bordes redondeados
                    }}
                >
                    Expertos en Puertas Electricas</Typography>
            </Grid>
        </Grid>
    )
}
