import styled from "@emotion/styled";
import { mainColor } from "../../styles/buildThemeOptions";

const MenuStyled = styled.div`
  padding: 140px 0px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: ${mainColor};
  min-height: 100vh;

  @media (max-width: 1000px) {
    min-height: 20px;
    padding: 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .navigation {
    display: flex;
    flex-direction: column;

    @media (max-width: 1000px) {
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    &__link {
      font-weight: bold;
      padding: 10px 60px;

      @media (max-width: 1000px) {
        padding: 10px 20px;
      }

      &--active {
        background-color: #000;
        color: #fff;
      }
    }
  }

  .home-link {
    &__container {
      height: 44px;

      @media (max-width: 1000px) {
        width: 64px;
      }
    }

    &__link {
      font-weight: bold;
      padding: 10px 60px;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 1000px) {
        padding: 10px 20px;
      }
    }
  }
`;

export default MenuStyled;
