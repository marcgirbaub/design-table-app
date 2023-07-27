import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";

const Layout = (): React.ReactElement => {
  return (
    <LayoutStyled>
      <LeftSideMenu />
      <main className="main-content">
        <Outlet />
      </main>
    </LayoutStyled>
  );
};

export default Layout;
