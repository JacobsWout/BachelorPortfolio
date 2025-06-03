import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5722',
      light: '#FF8A65',
      dark: '#F4511E',
    },
    secondary: {
      main: '#F5F7FA',
      light: '#FFFFFF',
      dark: '#E4E9F0',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8FAFC',
    },
    text: {
      primary: '#1E293B',
      secondary: '#64748B',
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", "Roboto", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: '#1E293B',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      letterSpacing: '0.01em',
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontSize: '1rem',
          padding: '12px 24px',
          boxShadow: 'none',
          fontWeight: 600,
          '&:hover': {
            boxShadow: '0px 8px 20px rgba(255, 87, 34, 0.15)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease-in-out',
        },
        contained: {
          background: '#FF5722',
          '&:hover': {
            background: '#F4511E',
          },
        },
        outlined: {
          borderWidth: '2px',
          borderColor: '#FF5722',
          color: '#FF5722',
          backgroundColor: '#FFFFFF',
          '&:hover': {
            borderWidth: '2px',
            borderColor: '#F4511E',
            backgroundColor: '#FFF5F2',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#FFFFFF',
          borderRadius: 24,
          border: '1px solid #F1F5F9',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        },
        elevation1: {
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          borderBottom: '1px solid #F1F5F9',
          color: '#1E293B',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          borderRadius: 24,
          border: '1px solid #F1F5F9',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0px 16px 30px rgba(0, 0, 0, 0.1)',
          },
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          backgroundColor: '#F8FAFC',
          '&:hover': {
            backgroundColor: '#F1F5F9',
          },
          transition: 'all 0.2s ease-in-out',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          height: 10,
          backgroundColor: 'rgba(255, 87, 34, 0.1)',
        },
        bar: {
          borderRadius: 8,
          background: 'linear-gradient(135deg, #FF5722 0%, #FF8A65 100%)',
        },
      },
    },
  },
});

export default theme; 