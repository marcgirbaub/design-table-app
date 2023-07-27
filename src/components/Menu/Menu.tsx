import { Link, useLocation } from "react-router-dom";
import endpoints from "../../router/endpoint";
import MenuStyled from "./MenuStyled";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Menu = (): React.ReactElement => {
  const location = useLocation();

  const getActiveClass = (path: string) =>
    location.pathname === `/${path}` ? "navigation__link--active" : "";

  return (
    <MenuStyled>
      <ThemeSwitch />
      <nav className="navigation">
        <Link
          to={endpoints.designs}
          className={`navigation__link ${getActiveClass(endpoints.designs)}`}
        >
          Designs
        </Link>
        <Link
          to={endpoints.setouts}
          className={`navigation__link ${getActiveClass(endpoints.setouts)}`}
        >
          Setouts
        </Link>
      </nav>
    </MenuStyled>
  );
};

export default Menu;
