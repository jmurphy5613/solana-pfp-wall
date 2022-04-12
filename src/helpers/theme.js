import { createTheme } from "@material-ui/core";
import './fonts.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0f172a'
        }
    },
    typography: {
        fontFamily: {
            primary: 'medium'
        }
    }
});

export default theme;