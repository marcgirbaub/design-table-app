import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";
import Menu from "../Menu/Menu";

const Layout = (): React.ReactElement => {
  return (
    <LayoutStyled>
      <Menu />
      <main className="main-content">
        <Outlet />
      </main>
    </LayoutStyled>
  );
};

export default Layout;
