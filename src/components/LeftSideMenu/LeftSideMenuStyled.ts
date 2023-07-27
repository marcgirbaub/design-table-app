import styled from "@emotion/styled";
import { mainColor } from "../../styles/buildThemeOptions";

const LeftSideMenuStyled = styled.div`
  padding: 160px 0px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: ${mainColor};
  min-height: 100vh;

  @media (max-width: 1000px) {
    display: none;
  }

  .navigation {
    display: flex;
    flex-direction: column;

    &__link {
      font-weight: bold;
      padding: 10px 60px;

      &--active {
        background-color: #000;
        color: #fff;
      }
    }
  }
`;

export default LeftSideMenuStyled;
