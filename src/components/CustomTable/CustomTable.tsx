import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  DesignStructure,
  DesignsStructure,
  SetoutStructure,
  SetoutsStructure,
  UserStructure,
  UsersStructure,
} from "../../types/types";
import getInitials from "../../utils/getInitials";
import formatDate from "../../utils/formatDate";
import CustomTableStyled from "./CustomTableStyled";

interface CustomTableProps {
  tableType: "designs" | "setouts";
  dataToDisplay: DesignsStructure | SetoutsStructure;
  users?: UsersStructure;
}

const CustomTable = ({
  dataToDisplay,
  tableType,
  users,
}: CustomTableProps): React.ReactElement => {
  if (tableType === "designs") {
    const notFoundUser: UserStructure = {
      id: 0,
      name: "Not Found",
    };

    return (
      <CustomTableStyled>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 450 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="table__title">Name</TableCell>
                <TableCell align="center" className="table__title">
                  Courses
                </TableCell>
                <TableCell align="center" className="table__title">
                  Wales
                </TableCell>
                <TableCell align="center" className="table__title">
                  Last Updated
                </TableCell>
                <TableCell align="center" className="table__title">
                  By
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataToDisplay.map((element) => (
                <TableRow
                  key={element.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {element.name}
                  </TableCell>
                  <TableCell align="center">
                    {(element as DesignStructure).wales}
                  </TableCell>
                  <TableCell align="center">{element.courses}</TableCell>
                  <TableCell align="center">
                    {formatDate(element.updated)}
                  </TableCell>
                  <TableCell align="center">
                    <span className="table__data table__data--by">
                      {getInitials(
                        users?.find(
                          (user) =>
                            user.id ===
                            (element as DesignStructure).user_id_last_update,
                        ) ?? notFoundUser,
                      )}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CustomTableStyled>
    );
  }

  return (
    <CustomTableStyled>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="table__title">Name</TableCell>
              <TableCell align="center" className="table__title">
                Machine Name
              </TableCell>
              <TableCell align="center" className="table__title">
                Machine Width
              </TableCell>
              <TableCell align="center" className="table__title">
                Courses
              </TableCell>
              <TableCell align="center" className="table__title">
                Last Updated
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataToDisplay.map((element) => (
              <TableRow
                key={element.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {element.name}
                </TableCell>
                <TableCell align="center">
                  {(element as SetoutStructure).machine_name.replace(/_/g, " ")}
                </TableCell>
                <TableCell align="center">
                  {(element as SetoutStructure).machine_width}
                </TableCell>
                <TableCell align="center">{element.courses}</TableCell>
                <TableCell align="center">
                  {formatDate(element.updated)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CustomTableStyled>
  );
};

export default CustomTable;
