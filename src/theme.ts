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
    MuiPopper: {
      defaultProps: {
        sx: {
          '.MuiPaper-root': {
            marginTop: '0.1rem',
            backgroundColor: '#1f1f1f',
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
        sx : {
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
          boxSizing: 'border-box',
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
