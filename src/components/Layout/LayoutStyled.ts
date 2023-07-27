import styled from "@emotion/styled";

const LayoutStyled = styled.div`
  display: flex;

  .main-content {
    padding: 100px 60px 60px;
    width: 100%;

    @media (max-width: 800px) {
      padding: 20px;
    }
  }
`;

export default LayoutStyled;
