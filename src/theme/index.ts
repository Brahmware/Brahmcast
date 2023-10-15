import { ThemeOptions as MuiThemeOptions, createTheme } from "@mui/material/styles";
import colors from "./Colors";
import { Transitions, transitions } from "./Transitions";
import { Poppins } from 'next/font/google';
 
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});


interface ThemeOptions extends MuiThemeOptions {
  Transitions?: Transitions;
}

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: poppins.style.fontFamily,
  },

  palette: {
    mode: 'light',
    primary: {
      main: colors.kesar,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.black,
      light: colors.slogan,
      contrastText: colors.white,
    },
    error: {
      main: colors.rakthalal,
      contrastText: colors.white,
    },
    warning: {
      main: colors.komola,
      contrastText: colors.white,
    },
    info: {
      main: colors.neelkantha,
      contrastText: colors.white,
    },
    success: {
      main: colors.kolapata,
      contrastText: colors.white,
    },
    text: {
      primary: colors.dhenu,
      secondary: colors.slogan,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '2rem',
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '1rem',
          padding: '0.25rem 1rem',
          transition: 'all 0.2s ease-in-out',
          boxShadow: 'none',

          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  },


  Transitions: transitions,
};

export default createTheme(themeOptions);