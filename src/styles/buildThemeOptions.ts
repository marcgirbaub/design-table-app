import { ThemeOptions } from "@mui/material";

export const mainColor = "#088A80";

export type Theme = "light" | "dark";

export function buildThemeOptions(theme: Theme) {
  const themeOptions: ThemeOptions = {
    palette: {
      mode: theme,
    },
    components: {
      MuiSwitch: {
        styleOverrides: {
          switchBase: { color: "#000" },
          colorPrimary: {
            "&.Mui-checked": {
              color: "#fff",
            },
          },
          track: {
            opacity: 0.4,
            backgroundColor: "#000",
            ".Mui-checked.Mui-checked + &": {
              opacity: 0.6,
              backgroundColor: "#fff",
            },
          },
        },
      },
    },
  };

  return themeOptions;
}
