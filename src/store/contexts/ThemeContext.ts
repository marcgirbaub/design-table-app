/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";
import { Theme } from "../../styles/buildThemeOptions";

interface ThemeContextStructure {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextStructure>({
  theme: "light",
  toggleTheme: () => {},
});
