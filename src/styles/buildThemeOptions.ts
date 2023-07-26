import { ThemeOptions } from "@mui/material";

export const mainColorLight = "#2C8079";
export const mainColorDark = "#5CD8CE";

export type Theme = "light" | "dark";

export function buildThemeOptions(theme: Theme) {
  const themeOptions: ThemeOptions = {
    palette: {
      mode: theme,
      ...(theme === "light"
        ? { primary: { main: mainColorLight } }
        : { primary: { main: mainColorDark } }),
    },
  };

  return themeOptions;
}
