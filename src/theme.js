import { createTheme } from '@mui/material/styles';

const theme = createTheme({ // make changes
  palette: {
    mode: 'light', 
    primary: {
      main: '#9AD4D6', 
    },
    secondary: {
      main: '#101935', 
    },
    background: {
      default: '#F2FDFF',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
