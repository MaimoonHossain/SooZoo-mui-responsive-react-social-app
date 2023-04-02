import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
        },
        otherColor:{
            main: '#2196f3',
            light: '#4dabf5',
        }
    },
});
