import { Box, Toolbar } from "@mui/material"
import { NavBar } from "../components";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const AgendaLayout = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                width: '100vw'
            }}
        >
            <NavBar />
            <Box
                component='main'
                sx={{ flexGrow: 1, p: 0, flex: '1 0 auto' }}
            >
                <Toolbar />
                {children}
                <Contact />

            </Box>
            <Footer />
        </Box>
    )
}
