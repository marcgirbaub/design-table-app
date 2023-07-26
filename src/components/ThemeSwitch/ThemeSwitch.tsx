import { Switch } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { ReactElement, useContext } from "react";
import { ThemeContext } from "../../store/contexts/ThemeContext";
import ThemeSwitchStyled from "./ThemeSwitchStyled";

const ThemeSwitch = (): ReactElement => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeSwitchStyled>
      <Brightness4Icon />
      <Switch
        onChange={toggleTheme}
        checked={theme === "dark"}
        edge="end"
        data-testid="dark-theme-switch"
      />
    </ThemeSwitchStyled>
  );
};

export default ThemeSwitch;
