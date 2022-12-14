import { createTheme } from "@mui/material";

export const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
};

export const myTheme = createTheme(themeOptions);
