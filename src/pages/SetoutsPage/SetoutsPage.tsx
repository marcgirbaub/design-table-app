import ErrorIcon from "@mui/icons-material/Error";
import { useQuery } from "react-query";
import CircularProgress from "@mui/material/CircularProgress";
import useApi from "../../hooks/useApi/useApi";
import { SetoutsStructure, infoType } from "../../types/types";
import CustomTable from "../../components/CustomTable/CustomTable";
import SetoutsPageStyled from "./SetoutsPageStyled";
import { leftVariants } from "../../styles/framerMotionVariants";

const SetoutsPage = (): React.ReactElement => {
  const { getData } = useApi();

  const { data, isLoading, isError } = useQuery("getSetoutsQuery", () =>
    getData(infoType.setouts),
  );

  if (isError) {
    return (
      <SetoutsPageStyled>
        <div className="error-container">
          <ErrorIcon fontSize="large" sx={{ color: "red" }} />
          <span>
            There was a problem fetching the data. Please try again later!
          </span>
        </div>
      </SetoutsPageStyled>
    );
  }

  if (isLoading) {
    return (
      <SetoutsPageStyled
        initial="initial"
        animate="animate"
        variants={leftVariants}
      >
        <CircularProgress />
      </SetoutsPageStyled>
    );
  }

  return (
    <SetoutsPageStyled
      initial="initial"
      animate="animate"
      variants={leftVariants}
    >
      <CustomTable
        tableType="setouts"
        dataToDisplay={data?.data as SetoutsStructure}
      />
    </SetoutsPageStyled>
  );
};

export default SetoutsPage;
