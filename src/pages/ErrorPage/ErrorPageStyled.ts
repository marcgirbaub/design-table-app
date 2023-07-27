import styled from "@emotion/styled";
import { motion } from "framer-motion";

const ErrorPageStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 100px;
  text-align: center;

  .error {
    &__code {
      font-size: 2rem;
      font-weight: bold;
    }

    &__back-link:hover {
      opacity: 0.4;
    }
  }
`;

export default ErrorPageStyled;
