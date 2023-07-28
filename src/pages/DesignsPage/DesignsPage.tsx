import { useQuery } from "react-query";
import ErrorIcon from "@mui/icons-material/Error";
import CircularProgress from "@mui/material/CircularProgress";
import useApi from "../../hooks/useApi/useApi";
import { DesignsStructure, infoType } from "../../types/types";
import CustomTable from "../../components/CustomTable/CustomTable";
import DesignsPageStyled from "./DesignsPageStyled";
import { leftVariants } from "../../styles/framerMotionVariants";

const DesignsPage = (): React.ReactElement => {
  const { getData } = useApi();

  const { data, isLoading, isError } = useQuery("getDesignsQuery", () =>
    getData(infoType.designs),
  );

  const {
    data: users,
    isLoading: usersIsLoading,
    isError: usersIsError,
  } = useQuery("getUsersQuery", () => getData(infoType.users));

  if (isError || usersIsError) {
    return (
      <DesignsPageStyled>
        <div className="error-container">
          <ErrorIcon fontSize="large" sx={{ color: "red" }} />
          <span>
            There was a problem fetching the data. Please try again later!
          </span>
        </div>
      </DesignsPageStyled>
    );
  }

  if (isLoading || usersIsLoading) {
    return (
      <DesignsPageStyled
        initial="initial"
        animate="animate"
        variants={leftVariants}
      >
        <CircularProgress />
      </DesignsPageStyled>
    );
  }

  return (
    <DesignsPageStyled
      initial="initial"
      animate="animate"
      variants={leftVariants}
    >
      <CustomTable
        tableType="designs"
        dataToDisplay={data?.data as DesignsStructure}
        users={users?.data}
      />
    </DesignsPageStyled>
  );
};

export default DesignsPage;
