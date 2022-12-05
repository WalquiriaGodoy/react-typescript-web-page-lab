import { createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

export const labTheme = createTheme({
  palette: {
    primary: {
      main: pink[100],
    },
    secondary: {
      main: pink[200],
    },
  },
});
