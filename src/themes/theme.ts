import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Barlow Semi Condensed, Arial, sans-serif",
    button: {
      fontFamily: "Barlow Semi Condensed, Arial, sans-serif",
      fontWeight: 500,
      textTransform: "none",
    },
    h1: {
      fontFamily: "Barlow Semi Condensed, Arial, sans-serif",
      fontWeight: 600,
    },
    body1: {
      fontFamily: "Barlow Semi Condensed, Arial, sans-serif",
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: "#233759 !important",
    },
    secondary: {
      main: "#f8a430!important",
    },
    background: {
      default: "rgb(20, 54, 102)",
    },
  },
});

export default theme;
