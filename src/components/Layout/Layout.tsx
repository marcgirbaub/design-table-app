import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";

const Layout = (): React.ReactElement => {
  return (
    <LayoutStyled>
      <main className="main-content">
        <Outlet />
      </main>
    </LayoutStyled>
  );
};

export default Layout;
