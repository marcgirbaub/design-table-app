import { createTheme } from "@mui/material";
import { Theme, buildThemeOptions } from "../../styles/buildThemeOptions";

const useMaterialTheme = (theme: Theme) => {
  const themeOptions = buildThemeOptions(theme);

  return createTheme(themeOptions);
};

export default useMaterialTheme;
