import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#ededed',
    },
    primary: {
      main: '#07f',
    },
    secondary: {
      main: '#e8e8e8',
    },
    text: {
      primary: '#505050',
      secondary: '#757575',
    },
  },
  breakpoints: {
    md: '912px',
  },
  shape: {
    borderRadius: '0',
  },
  typography: {
    fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
    h1: {
      fontSize: '32px',
      fontWeight: '500',
    },
    h3: {
      fontSize: '26px',
      fontWeight: '500',
    },
    body1: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '400',
    },
    body2: {
      fontSize: '14px',
      lineHeight: '16px',
      fontWeight: '500',
    },
  },
  overrides: {
    MuiOutlinedInput: {
      input: {
        padding: '10.5px 16px',
        backgroundColor: '#f9f9f9',
        borderColor: '#eaeaea',
      },
    },
    MuiTableCell: {
      root: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '400',
        borderBottom: '1px solid #eaeaea',
      },
      head: {
        fontSize: '14px',
        lineHeight: '16px',
        fontWeight: '500',
        color: '#757575',
        padding: '12px 16px',
      },
      body: {
        padding: '23.5px 16px',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        fontSize: '16px',
      },
      contained: {
        boxShadow: 'none',
      },
      containedSecondary: {
        color: '#757575',
      },
    },
    MuiIconButton: {
      root: {
        color: '#909090',
      },
    },
  },
});

export default theme;
