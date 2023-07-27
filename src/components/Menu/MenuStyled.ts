import styled from "@emotion/styled";
import { mainColor } from "../../styles/buildThemeOptions";

const MenuStyled = styled.div`
  padding: 160px 0px;
  display: flex;
  flex-direction: column;
  gap: 40px;
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
`;

export default MenuStyled;
