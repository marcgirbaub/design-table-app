import { Link } from "react-router-dom";
import { downVariants } from "../../styles/framerMotionVariants";
import ErrorPageStyled from "./ErrorPageStyled";
import HomeIcon from "@mui/icons-material/Home";

const ErrorPage = (): React.ReactElement => {
  return (
    <ErrorPageStyled
      initial="initial"
      animate="animate"
      variants={downVariants}
    >
      <span className="error__code">404</span>
      <span>Ups! The page you are trying to load does not exist!</span>
      <Link to={"/"} className="error__back-link">
        <HomeIcon fontSize="large" />
      </Link>
    </ErrorPageStyled>
  );
};

export default ErrorPage;
