/* eslint-disable no-console */
import { Link, useLocation } from "react-router-dom";
import endpoints from "../../router/endpoint";
import LeftSideMenuStyled from "./LeftSideMenuStyled";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const LeftSideMenu = (): React.ReactElement => {
  const location = useLocation();

  console.log(location.pathname);

  const getActiveClass = (path: string) =>
    location.pathname === `/${path}` ? "navigation__link--active" : "";

  return (
    <LeftSideMenuStyled>
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
    </LeftSideMenuStyled>
  );
};

export default LeftSideMenu;
