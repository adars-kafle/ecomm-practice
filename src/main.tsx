import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// For creating custom themes in MUI
import { ThemeProvider, createTheme } from "@mui/material/styles";

// React Toastify Imports
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0077b6",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <ToastContainer />
    </ThemeProvider>
  </React.StrictMode>
);
