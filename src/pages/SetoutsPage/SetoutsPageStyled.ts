import styled from "@emotion/styled";
import { motion } from "framer-motion";

const SetoutsPageStyled = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  .error-container {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
`;

export default SetoutsPageStyled;
