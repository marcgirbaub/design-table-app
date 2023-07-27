import { useQuery } from "react-query";
import CircularProgress from "@mui/material/CircularProgress";
import useApi from "../../hooks/useApi/useApi";
import { DesignsStructure, infoType } from "../../types/types";
import CustomTable from "../../components/CustomTable/CustomTable";
import SetoutsPageStyled from "./SetoutsPageStyled";

const SetoutsPage = (): React.ReactElement => {
  const { getData } = useApi();

  const { data, isLoading } = useQuery("getSetoutsQuery", () =>
    getData(infoType.setouts),
  );

  if (isLoading) {
    return (
      <SetoutsPageStyled>
        <CircularProgress />
      </SetoutsPageStyled>
    );
  }

  return (
    <SetoutsPageStyled>
      <CustomTable
        tableType="setouts"
        dataToDisplay={data?.data as DesignsStructure}
      />
    </SetoutsPageStyled>
  );
};

export default SetoutsPage;
