import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#1ed760',
      },
    },
    typography: {
      fontFamily: 'Circular Std-Black, sans-serif',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '@font-face': [
            {
              fontFamily: 'Circular Std-Black',
              src: 'url(/fonts/circular-black.ttf) format("truetype")',
              fontWeight: 'normal',
              fontStyle: 'normal',
            },
          ],
          '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            fontFamily: 'Circular Std-Black, sans-serif',
            color: '#fff',
          },
          body: {
            backgroundColor: '#121212',
          },
        },
      },
    },
  });

export default theme;
