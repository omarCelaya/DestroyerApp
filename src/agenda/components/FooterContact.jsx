import { LocationOn, Mail, Phone } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const FooterContact = () => {
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
                Contáctanos
            </Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={1}>
                    <LocationOn />
                </Grid>
                <Grid item xs={11}>
                    <Typography
                        fontWeight="300"
                        fontSize="1rem"
                    >Austria 8628, Fontana, 85096 Cdad. Obregón, Son.</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Phone />
                </Grid>
                <Grid item xs={11}>
                    <Typography
                        fontWeight="300"
                        fontSize="1rem"
                    >+521-6442352465</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Mail />
                </Grid>
                <Grid item xs={11}>
                    <Typography
                        fontWeight="300"
                        fontSize="1rem"
                    >destroyerpuertas@gmail.com</Typography>
                </Grid>
            </Grid>
        </>
    )
}
