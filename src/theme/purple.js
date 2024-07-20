import { createTheme } from "@mui/material";
import { red, brown } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#f5f5f5'
        },
        secondary: {
            main: '#bdbdbd'
        },
        error: {
            main: red.A400
        }

    }
})