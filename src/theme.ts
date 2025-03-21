import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1ed760',
    },
    secondary: {
      main: '#1f1f1f',
      light: '#2c2c2c',
    }
  },
  typography: {
    fontFamily: 'Circular Std-Black, sans-serif',
  },
  components: {
    MuiTypography: {
      defaultProps: {
        sx: {
          color: "#fff"
        }
      }
    },
    MuiPopper: {
      defaultProps: {
        sx: {
          '.MuiPaper-root': {
            marginTop: '0.1rem',
            backgroundColor: '#1f1f1f',
            color: '#999999'
          }
        }
      }
    },
    MuiInputBase: {
      defaultProps: {
        sx: {
          color: '#999999',
          borderRadius: '31.25rem',
          backgroundColor: '#1f1f1f',
        }
      }
    },
    MuiButton: {
      defaultProps: {
        sx: {
          borderRadius: '31.25rem'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [
          {
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'Circular Std-Black',
            src: 'url(/fonts/circular-black.ttf) format("truetype")',
          },
        ],
        '*': {
          margin: 0,
          padding: 0,
          color: '#fff',
          boxSizing: 'border-box !important',
          fontFamily: 'Circular Std-Black, sans-serif',
        },
        body: {
          backgroundColor: '#121212',
        },
      },
    },
  },
});

export default theme;
