import HomeIcon from "@mui/icons-material/Home";
import { downVariants } from "../../styles/framerMotionVariants";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): React.ReactElement => {
  return (
    <HomePageStyled initial="initial" animate="animate" variants={downVariants}>
      <HomeIcon fontSize="large" />
      <span>
        Welcome, user! Please click on the links to navigate around the app!
      </span>
    </HomePageStyled>
  );
};

export default HomePage;
