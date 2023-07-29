import styled from "@emotion/styled";

const LayoutStyled = styled.div`
  @media (max-width: 1000px) {
    flex-direction: column;
  }

  .main-content {
    padding: 100px 60px 60px 240px;
    width: 100%;

    @media (max-width: 1000px) {
      padding: 60px 20px 20px;
    }
  }
`;

export default LayoutStyled;
