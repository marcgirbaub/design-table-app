import React, { ReactNode, useCallback, useMemo, useState } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Theme } from "../../styles/buildThemeOptions";
import useMaterialTheme from "../../hooks/useMaterialTheme/useMaterialTheme";
import { ThemeContext } from "./ThemeContext";

interface ThemeContextProviderProps {
  children: ReactNode;
}

const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps): React.ReactElement => {
  const [usedTheme, setUsedTheme] = useState<Theme>("light");

  const theme = useMaterialTheme(usedTheme);

  const handleToggleTheme = useCallback(() => {
    if (usedTheme === "light") {
      setUsedTheme("dark");
    } else {
      setUsedTheme("light");
    }
  }, [usedTheme]);

  const store = useMemo(
    () => ({
      theme: usedTheme,
      toggleTheme: handleToggleTheme,
    }),
    [handleToggleTheme, usedTheme],
  );

  return (
    <ThemeContext.Provider value={store}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
