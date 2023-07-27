import styled from "@emotion/styled";
import { mainColor } from "../../styles/buildThemeOptions";

const CustomTableStyled = styled.div`
  width: 100%;

  .table {
    &__title {
      font-weight: bold;
    }

    &__data {
      &--by {
        background-color: ${mainColor};
        color: #fff;
        font-weight: bold;
        border-radius: 50%;
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`;

export default CustomTableStyled;
